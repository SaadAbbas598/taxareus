import React, { useState } from 'react';
import { FiX, FiMessageSquare } from 'react-icons/fi';
import './ContactWidget.css';

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [hasMessages, setHasMessages] = useState(false);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setHasMessages(true);
      setMessage('');
      // In real app, send message to backend
      setTimeout(() => {
        setMessage('');
      }, 500);
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <button
          className="contact-widget-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
          title="Chat with us"
        >
          <FiMessageSquare size={24} />
          {hasMessages && <span className="pulse"></span>}
        </button>
      )}

      {/* Chat Widget Window */}
      {isOpen && (
        <div className="contact-widget-window">
          {/* Header */}
          <div className="widget-header">
            <div className="widget-header-content">
              <div className="widget-logo">
                <div className="logo-square">T</div>
              </div>
              <div className="widget-title">
                <h4>Taxareus Support</h4>
                <p>Typically replies within few minutes</p>
              </div>
            </div>
            <button
              className="widget-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="widget-messages">
            {!hasMessages && (
              <div className="welcome-message">
                <div className="message-avatar">👋</div>
                <p className="message-text">
                  Hello! How can we help you today? Ask us anything about tax filing, pricing, or our services.
                </p>
              </div>
            )}
            {hasMessages && (
              <div className="message-item user-message">
                <p>{message || 'Your message received'}</p>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form className="widget-input-form" onSubmit={handleSendMessage}>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="widget-input"
              />
              <button type="submit" className="send-button" aria-label="Send message">
                ➤
              </button>
            </div>
            <div className="quick-actions">
              <button type="button" className="action-btn" title="Attach file">
                📎
              </button>
              <button type="button" className="action-btn" title="Add emoji">
                😊
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactWidget;
