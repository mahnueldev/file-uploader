import './app.css';
import Home from './pages/Home';
import Media from './pages/Media';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/media' element={<Media />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
