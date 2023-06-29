import React, { useState, useRef, useEffect, createContext, useContext } from 'react';
import Modal from 'react-modal';

// Create a context for chat messages
const ChatMessagesContext = createContext();

const ChatGPTPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const chatBodyRef = useRef(null);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const sendMessage = () => {
    if (!message) {
      return; // Skip sending empty messages
    }

    const senderMessage = {
      sender: 'user',
      message: message,
    };
    setChatMessages((prevChatMessages) => [...prevChatMessages, senderMessage]);

    fetch(`${process.env.REACT_APP_API_URL}get-response-from-chat-gpt?message=${message}&key=${process.env.REACT_APP_ACCESS_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'true') {
          const receiverMessage = {
            sender: 'bot',
            message: data.data,
          };
          setChatMessages((prevChatMessages) => [...prevChatMessages, receiverMessage]);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setMessage('');
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <>
      <div className="gpt-popup">
        <div className="gpt-btns">
          <img onClick={openPopup} className="abxo open" src="images/gpt.png" alt="gpt" />
          <img onClick={closePopup} className="abxo close" src="images/gpt-close.png" alt="gpt-close" />
        </div>

        <Modal isOpen={isOpen} onRequestClose={closePopup}>
          <div className="gpt-header">
            <img src="images/gpt.png" alt="gpt-close" />
            <h4>Welcome to Robot Chat</h4>
          </div>

          <ChatMessagesContext.Provider value={chatMessages}>
            <div className="gpt-body-msg" ref={chatBodyRef}>
              {chatMessages && chatMessages.length > 0 ? (
                chatMessages.map((chatMessage, index) => (
                  <div key={index} className={`gpt-body-${chatMessage.sender} gpt-txt`}>
                    {chatMessage.sender === 'user' ? (
                      <>
                        <h4>{chatMessage.message}</h4>
                        <img
                          src={chatMessage.sender === 'user' ? 'images/user.png' : 'images/gpt.png'}
                          alt={chatMessage.sender}
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={chatMessage.sender === 'user' ? 'images/user.png' : 'images/gpt.png'}
                          alt={chatMessage.sender}
                        />
                        <h4>{chatMessage.message}</h4>
                      </>
                    )}
                  </div>
                ))
              ) : (
                <p>No messages</p> // Placeholder when there are no messages
              )}
            </div>

            <div className="gpt-send-msg">
              <textarea
                type="textarea"
                placeholder="Write a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button type="submit" onClick={sendMessage}>
                <img src="images/gpt-send.png" alt="gpt-send" />
              </button>
            </div>
          </ChatMessagesContext.Provider>
        </Modal>
      </div>
    </>
  );
};

export default ChatGPTPopup;
