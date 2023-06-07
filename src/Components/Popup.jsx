import { useState } from 'react';
import Modal from 'react-modal';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Render a button or other element to trigger the popup */}
      <button className="nav-link custom-btn" onClick={openPopup}><span>Log a Support Request</span></button>
      
      {/* Render the popup component */}
      <Modal isOpen={isOpen} onRequestClose={closePopup}>
        <button className="close" onClick={closePopup}>Close</button>
      </Modal>
    </div>
  );
};

export default Popup