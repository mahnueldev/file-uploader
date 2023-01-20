// import { useSelector } from 'react-redux';
// import { useGetUser } from './features/auth/profileSlice';

// useGetUser();
// const user = useSelector((state) => state.auth.user);

import { Fragment } from 'react';
import { BrowseCard, Header } from '../layouts';
const Home = () => {
  return (
    <Fragment>
      <div className='flex justify-end'>
        <a href='./media' className=' col-blue pdlr-1x pdtb-1x wdt-1x bg-red '>
          Uploads
        </a>
      </div>
      <div id='container-1x'>
        <div className='flex col'>
          <Header />
          <div className='sp-3x '></div>
          <BrowseCard />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
