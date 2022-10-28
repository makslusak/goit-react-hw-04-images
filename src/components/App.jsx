import React from 'react';
import { useState, useEffect } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Error } from './Error/Error';
import { getDataApi } from '../helpers/api';
import { Status } from '../helpers/status';

export const App = () => {
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState(Status.init);
  const [isError, setIsError] = useState(null);
  const [isActiveImage, setIsActiveImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responceQuantity, setResponceQuantity] = useState(null);
  let numberOfPages = Math.ceil(responceQuantity / 12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(Status.loading);
        const responce = await getDataApi(search, page);
        setResponceQuantity(responce.totalHits);
        if (images === null) {
          setImages(responce.hits);
          setStatus(Status.success);
        } else {
          setImages([...images, ...responce.hits]);
          setStatus(Status.success);
        }
      } catch (error) {
        setIsError(error.message);
        setStatus(Status.error);
      }
    };
    if (search) fetchData();
    // eslint-disable-next-line
  }, [search, page]);

  const handleDataFromSubmit = data => {
    setPage(1);
    setImages(null);
    setSearch(data);
    setIsModalOpen(false);
  };

  const handlePageChange = () => {
    setStatus(Status.loading);
    setPage(page + 1);
  };

  const handleModalShow = evt => {
    if (evt.currentTarget === evt.target) {
      setIsActiveImage(evt.currentTarget.id);
      setIsModalOpen(true);
    }
  };

  const handleModalClose = isOpen => {
    setIsModalOpen(isOpen);
  };

  return (
    <>
      <Searchbar onSubmit={handleDataFromSubmit} />
      {status === Status.loading && <Loader />}
      {status === Status.error && <Error textError={isError} />}
      {images && <ImageGallery onClick={handleModalShow} images={images} />}
      {images && images.length !== 0 && numberOfPages !== page && (
        <Button text={'Load more'} onClick={handlePageChange} />
      )}
      {images?.length === 0 && (
        <Error textError={'Try to find something else'} />
      )}
      {isModalOpen && (
        <Modal
          isActiveImage={isActiveImage}
          onModalClose={handleModalClose}
          images={images}
        />
      )}
    </>
  );
};
