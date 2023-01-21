import media from '../svg/media.svg';
const Header = () => {
  return (
    <div className='flex coln align-cent'>
        <img src={media} alt="media" className='media-disp' />
      <h1>File Uploader</h1>
      
      <p className='txt-cent ' id='container-4x'>
        Introducing our new and innovative app, the ultimate solution for all
        your file uploading needs. With our app, you can easily and securely
        upload any type of file, from documents and images to videos and music.
        Don't waste any more time uploading files the old-fashioned way
      </p>
      
    </div>
  );
};

export default Header;
