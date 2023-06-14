import { useState } from 'react';
import Modal from 'react-modal';
import SupportForm from './SupportForm';


const SupportPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="popup-gd">
      {/* Render a button or other element to trigger the popup */}
      <button onClick={openPopup} className="custom-btn"><span>Log a Support Request</span></button>

      {/* Render the popup component */}
      <Modal isOpen={isOpen} onRequestClose={closePopup} className="lifetime-form">
<SupportForm />
        <button className="close" onClick={closePopup}>Close</button>
      </Modal>
    </div>
  );
};

export default SupportPopup