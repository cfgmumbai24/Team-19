import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add user message to chat
    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Call the API
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: input },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I did not understand that.';

      // Add bot message to chat
      setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessages([...newMessages, { sender: 'bot', text: 'An error occurred. Please try again later.' }]);
    }
  };

  return (
    <div>
      <button className="chat-button" onClick={toggleChat}>
        {isOpen ? '✖' : '💬'}
      </button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-window-header">Chatbot</div>
          <div className="chat-window-body">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-message chat-message-${message.sender}`}
              >
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </div>
            ))}
          </div>
          <div className="chat-window-footer">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="chat-input"
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
