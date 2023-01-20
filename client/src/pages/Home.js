// import { useSelector } from 'react-redux';
// import { useGetUser } from './features/auth/profileSlice';

// useGetUser();
// const user = useSelector((state) => state.auth.user);

import { BrowseCard, Header } from '../layouts';
const Home = () => {
  return (
    <div id='container-1x'>
      <div className='flex col'>
        <Header />
        <div className='sp-3x '></div>
        <BrowseCard />
      </div>
    </div>
  );
};

export default Home;
