import { useState } from 'react';
import Modal from 'react-modal';


const ChatGPTPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="gpt-popup">
        {/* Render a button or other element to trigger the popup */}
        <div className="gpt-btns">
          <img onClick={openPopup} className="abxo open" src="images/gpt.png" alt="gpt" />
          <img onClick={closePopup} className="abxo close" src="images/gpt-close.png" alt="gpt-close" />
        </div>

        {/* Render the popup component */}
        <Modal isOpen={isOpen} onRequestClose={closePopup}>
          <div className="gpt-header">
            <img src="images/gpt.png" alt="gpt-close" />
            <h4>Welcome to Robot Chat</h4>
          </div>

          <div className="gpt-body-msg">
             <div className="gpt-body-user gpt-txt">                
                <h4>Hi</h4>
                <img src="images/user.png" alt="gpt-close" />
             </div>

             <div className="gpt-body-bot gpt-txt">   
                <img src="images/gpt.png" alt="gpt-close" />             
                <h4>Hey there! Welcome to Red3sixty</h4>                
             </div>
          </div>

          <div className="gpt-send-msg">
          <textarea type="textarea" placeholder="Write a message..." />
          <button type="submit"><img src="images/gpt-send.png" alt="gpt-send" /></button>
          </div>
        </Modal>
      </div>


    </>
  );
};

export default ChatGPTPopup