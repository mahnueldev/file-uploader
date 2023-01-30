// import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import mime from 'mime-types';
import { BsFillImageFill } from 'react-icons/bs';
import { HiDocumentText, HiDocument } from 'react-icons/hi';

import DropSvg from '../svg/drop.svg';

const UploadLayout = ({multiFiles, setMultiFiles}) => {
  
  const { getRootProps, getInputProps } = useDropzone({
    
    accept: 'image/*, video/*, audio/*, .jpg, .jpeg, .png, .gif, .mp4, .mp3, .ogg, .wav',
    onDrop: (acceptedFiles) => {
      setMultiFiles(acceptedFiles);
    },
  });
  const handleChange = (e) => {
    setMultiFiles(e.target.files);
  };
  const showFiles = multiFiles.map((file) => (
    <li key={file.name} className=' flex no-style sp-1x align-cent sg-1x'>
      <div >
        {mime.extension(file.type) === 'jpg' ||
        mime.extension(file.type) === 'jpeg' ||
        mime.extension(file.type) === 'png' ? (
          <BsFillImageFill className='col-blue wdt-1x hgt-1x' />
        ) : mime.extension(file.type) === 'pdf' ||
          mime.extension(file.type) === 'doc' ? (
          <HiDocumentText className='col-red wdt-1x hgt-1x'/>
        ) : (
          <HiDocument className='col-purple wdt-1x hgt-1x'/>
        )}
      </div>
      {file.name}
    </li>
  ));
  return (
    <div className='flex  sg-1x'>
      {/* Left Section */}
      <section
        {...getRootProps()}
        className='flex coln bdr-dash-1x rad-2x hgt-6x wdt-6x align-cent justify-cent grab'
      >
        <input {...getInputProps()} type="file" multiple onChange={handleChange} />
        <div className='flex'>
          <img src={DropSvg} alt='media' className='media-disp' />
        </div>
        <div className='wdt-3x txt-cent'>
          <p className='col-gray-l'>
            Drop your files here or{' '}
            <span className='col-blue wgt500 pointer' {...getRootProps()}>
              Browse
            </span>
          </p>
        </div>
      </section>
      {/* Right Section */}
      <section>
        <aside>
          
          <ul> {showFiles}</ul>
        </aside>
      </section>
    </div>
  );
};

export default UploadLayout;
