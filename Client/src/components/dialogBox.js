import React from 'react';
const DialogBox = ({ message }) => {


  const handleClose = () => {
    window.location.href = '/'; // Redirect to the homepage
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
