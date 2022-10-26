import { Oval } from 'react-loader-spinner';
import '../../../node_modules/react-loader-spinner/dist/loader/Oval';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
  );
};
