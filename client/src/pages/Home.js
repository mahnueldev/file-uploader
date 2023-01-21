// import { useSelector } from 'react-redux';
// import { useGetUser } from './features/auth/profileSlice';

// useGetUser();
// const user = useSelector((state) => state.auth.user);

import { Fragment } from 'react';
import { BrowseCard, Header } from '../layouts';
const Home = () => {
  return (
    <Fragment>
      <div className='flex justify-end pdtb-1x'>
        <a href='./media' className=' flex justify-cent col-white pdlr-1x pdtb-1x bg-red wdt-3x rad-5x '>
          Uploads
        </a>
      </div>
      <div id='container-1x'>
        <div className='flex coln'>
          <Header />
          <div className='sp-3x '></div>
          <BrowseCard />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
