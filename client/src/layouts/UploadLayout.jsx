import React, { useState } from 'react';
import { DropFiles, ShowFiles } from '../components';
import { useDropzone } from 'react-dropzone';

const UploadLayout = () => {
const [acceptedFiles, setFiles] = useState([]);
const onDrop = (acceptedFiles) => {
setFiles(acceptedFiles);
};

const { getRootProps, getInputProps } = useDropzone({
onDrop,
accept: 'image/*, application/pdf, .doc, .docx, .xls, .xlsx',
multiple: true,
});
const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);
return (
    
    <div className='flex'>
      <DropFiles
        setFiles={setFiles}
        files={files}
        getRootProps={getRootProps}
        getInputProps={getInputProps}
      />
      <ShowFiles files={files} />
    </div>
  );
};

export default UploadLayout;
