import { UploadLayout } from "../layouts";

import Cancel from "../svg/cancel";
const UploadModal = ({ isOpen, setIsOpen }) => {
    
 
    return (
      <>
        {isOpen && (
          <div className={`modal ${isOpen ? 'open' : ''} `}>
            <div className='modal-content'>
            <div className="flex justify-end wdt-1x">
                <Cancel onClick={() => setIsOpen(false)} width='1rem' height='1rem'/>
            </div>
              <div className='modal-header'>
                <h2 className="col-gray"><span className="col-blue">Upload </span>Files</h2>
              </div>
              <div className='modal-body'>
            
                <UploadLayout />
              </div>
             <div className="modal-footer">
                <button className="col-button" type="submit">Send</button>
             </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default UploadModal;
  
  
  
  