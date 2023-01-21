const UploadModal = ({ isOpen, setIsOpen }) => {
    return (
      <>
        {isOpen && (
          <div className={`modal ${isOpen ? 'open' : ''} `}>
            <div className='modal-content'>
              <div className='modal-header'>
                <h2>Modal Title</h2>
              </div>
              <div className='modal-body'>
                <p>Modal content goes here</p>
              </div>
              <div className='modal-footer'>
                <button onClick={() => setIsOpen(false)}>Close</button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default UploadModal;
  
  
  
  