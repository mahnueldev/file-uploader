import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFiles } from '../features/file/filesSlice';
import mime from 'mime-types';

import { HiDocumentText, HiDocument} from 'react-icons/hi';

const Media = () => {
  const dispatch = useDispatch();
  const { files, isLoading, error } = useSelector((state) => state.files);

  useEffect(() => {
    dispatch(getFiles());
  }, [dispatch]);

  if (isLoading) {
    return <div className='flex justify-cent align-cent full'>Loading...</div>;
  }

  if (error) {
    return <div className='flex justify-cent align-cent full'>{error}</div>;
  }
  return (
    <ul className='grid grid-col-4x no-style '>
      {files.map((file) => {
        let extension = mime.extension(file.type);
        console.log(extension);
        let icon;
        if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
          icon = <div><img src={file.url} alt="media" className='wdt-3x hgt-3x' /><p>{file.name}</p></div>
        } else if (extension === 'pdf' || extension === 'doc') {
          icon = <div><HiDocumentText className='col-red wdt-3x hgt-3x' /><p>{file.name}</p></div>
        } else {
          icon = <div className='flex align-cent'><HiDocument className='col-red wdt-2x hgt-2x' /><p>{file.name}</p></div>
        }
        return (
          <li key={file.id} >
            <div className='pdlr-5x '>{icon}</div>
          </li>
        )
      })}
    </ul>
  )
};

export default Media;
