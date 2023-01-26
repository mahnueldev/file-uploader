import DropSvg from '../svg/drop.svg';

const DropFiles = ({
  files,
  setFiles,
  getRootProps,
  getInputProps,
  
}) => {
  
  return (
    <section
      {...getRootProps()}
      className='flex coln bdr-dash-1x rad-2x hgt-6x wdt-6x align-cent justify-cent grab'
    >
      <input {...getInputProps()} />
      <div className='flex'>
        <img src={DropSvg} alt='media' className='media-disp' />
      </div>
      <div className='wdt-3x txt-cent'>
        <p className='col-gray-l'>
          Drop your files here or{' '}
          <span
            className='col-blue wgt500 pointer'
            onClick={() => document.getElementById('file-input').click()}
          >
            Browse
          </span>
        </p>
        <input
          type='file'
          id='file-input'
          style={{ display: 'none' }}
          onChange={(event) => setFiles(event.target.files)}
          multiple
        />
      </div>
    </section>
  );
};

export default DropFiles;
