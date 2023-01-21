import React, { useState } from 'react';
import { Button } from '../components';
import { UploadModal } from '../modals';

const Browse = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id='container-3x '>
      <div
        id='container-4x'
        className='flex justify-btw sp-2x bdr-sol-1x bdr-end rad-5x col-gray-l pdtb-1x  '
      >
        <p className=' col-gray-l '>Upload files here</p>
        <Button
          onClick={() => setIsOpen(true)}
          text='BROWSE'
          className='open-modal '
        />
        <UploadModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Browse;
