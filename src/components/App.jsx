import React from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Error } from './Error/Error';
import { getDataApi } from '../helpers/api';
import { Status } from '../helpers/status';

export class App extends React.Component {
  state = {
    images: null,
    page: 1,
    search: '',
    status: Status.init,
    isError: null,
    isActiveImage: null,
    isModalOpen: false,
    responceQuantity: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, search } = this.state;
    try {
      if (prevState.search !== search || prevState.page !== page) {
        this.setState({ status: Status.loading });
        const responce = await getDataApi(search, page);
        this.setState({ responceQuantity: responce.totalHits });

        if (this.state.images === null) {
          this.setState({ images: responce.hits, status: Status.success });
        } else {
          this.setState(prevSt => ({
            images: [...prevSt.images, ...responce.hits],
            status: Status.success,
          }));
        }
      }
    } catch (error) {
      this.setState({ isError: error.message, status: Status.error });
    }
  }

  handleDataFromSubmit = data => {
    this.setState({ page: 1, images: null, search: data });
  };
  handlePageChange = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1, status: Status.loading };
    });
  };
  handleModalShow = evt => {
    if (evt.currentTarget === evt.target) {
      this.setState({ isActiveImage: evt.currentTarget.id, isModalOpen: true });
    }
  };
  handleModalClose = isOpen => {
    this.setState({ isModalOpen: isOpen });
  };

  render() {
    const {
      page,
      images,
      status,
      isActiveImage,
      isModalOpen,
      isError,
      responceQuantity,
    } = this.state;
    let numberOfPages = Math.ceil(responceQuantity / 12);
    return (
      <>
        <Searchbar onSubmit={this.handleDataFromSubmit} />
        {status === Status.loading && <Loader />}
        {status === Status.error && <Error textError={isError} />}
        {images && (
          <ImageGallery onClick={this.handleModalShow} images={images} />
        )}
        {images && images.length !== 0 && numberOfPages !== page && (
          <Button text={'Load more'} onClick={this.handlePageChange} />
        )}
        {images?.length === 0 && (
          <Error textError={'Try to find something else'} />
        )}
        {isModalOpen && (
          <Modal
            isActiveImage={isActiveImage}
            onModalClose={this.handleModalClose}
            images={images}
          />
        )}
      </>
    );
  }
}
