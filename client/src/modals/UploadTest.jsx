// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { postFile } from '../features/file/filesSlice';
// import Cancel from '../svg/cancel';
// import { useDropzone } from 'react-dropzone';

// const UploadTest = ({ isOpen, setIsOpen }) => {
//   const dispatch = useDispatch();
//   const [files, setFiles] = useState([]);
//   const { getRootProps, getInputProps } = useDropzone({
//     accept:
//       'image/*, video/*, audio/*, .jpg, .jpeg, .png, .gif, .mp4, .mp3, .ogg, .wav',
//     onDrop: (acceptedFiles) => {
//       setFiles(acceptedFiles);
//     },
//   });

//   const handleSubmit = (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append('file', file);

//     dispatch(postFile(formData));
//   };

//   return (
//     <>
//       {isOpen && (
//         <form
//           onSubmit={handleSubmit}
//           className={`modal ${isOpen ? 'open' : ''} `}
//         >
//           <div className='modal-content'>
//             <div className='flex justify-end wdt-1x'>
//               <Cancel
//                 onClick={() => setIsOpen(false)}
//                 width='1rem'
//                 height='1rem'
//               />
//             </div>
//             <div {...getRootProps()}>
//               <input {...getInputProps()} />
//               <p>Drag and drop some files here, or click to select files</p>
//               {files.map((file) => (
//                 <p key={file.path}>{file.path}</p>
//               ))}
//             </div>
//             <button type='submit'>Upload</button>
//           </div>
//         </form>
//       )}
//     </>
//   );
// };

// export default UploadTest;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postFiles } from '../features/file/filesSlice';
import Cancel from '../svg/cancel';
import { useDropzone } from 'react-dropzone';

const UploadTest = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const [multiFiles, setMultiFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*, video/*, audio/*, .jpg, .jpeg, .png, .gif, .mp4, .mp3, .ogg, .wav',
    onDrop: (acceptedFiles) => {
      setMultiFiles(acceptedFiles);
    },
  });

  const handleSubmit = (e) => {
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
          onSubmit={handleSubmit}
          className={`modal ${isOpen ? 'open' : ''} `}
        >
          <div className='modal-content'>
            <div className='flex justify-end wdt-1x'>
              <Cancel 
                onClick={() => setIsOpen(false)}
                width='1rem'
                height='1rem'
              />
            </div>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop some files here, or click to select files</p>
              {multiFiles.map((file) => (
                <p key={file.path}>{file.path}</p>
              ))}
            </div>
            <button type='submit'>Upload</button>
          </div>
        </form>
      )}
    </>
  );
};

export default UploadTest;

