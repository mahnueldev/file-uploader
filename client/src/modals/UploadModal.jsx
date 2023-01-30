import React, { useState } from 'react';
import { UploadLayout } from '../layouts';
import { useDispatch } from 'react-redux';
import { postFiles } from '../features/file/filesSlice';
import Cancel from '../svg/cancel';

const UploadModal = ({ isOpen, setIsOpen }) => {
  const [multiFiles, setMultiFiles] = useState([]);
  const dispatch = useDispatch();
  // const handleUpload = async (e) => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   files.forEach((file) => data.append('files', file));

  //   try {
  //     await dispatch(postFile(data));
  //     setIsOpen(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < multiFiles.length; i++) {
      formData.append('files', multiFiles[i]);
    }
    dispatch(postFiles(formData));
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <form
          className={`modal ${isOpen ? 'open' : ''} `}
          onSubmit={handleUpload}
        >
          <div className='modal-content'>
            <div className='flex justify-end wdt-1x'>
              <Cancel
                onClick={() => setIsOpen(false)}
                width='1rem'
                height='1rem'
              />
            </div>
            <div className='modal-header'>
              <h2 className='col-gray'>
                <span className='col-blue'>Upload </span>Files
              </h2>
            </div>
            <div className='modal-body'>
              <UploadLayout multiFiles={multiFiles} setMultiFiles={setMultiFiles} />
            </div>
            <div className='modal-footer'>
              <button className='col-button' type='submit'>
                Send
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default UploadModal;
