import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Chatbot.css';

// Web Speech API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US'; // Set recognition language to English

const synth = window.speechSynthesis;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);

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
    // Call the Gemini API
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
      const updatedMessages = [...newMessages, { sender: 'bot', text: botResponse }];
      setMessages(updatedMessages);

      // Convert bot response to speech
      const utterance = new SpeechSynthesisUtterance(botResponse);
      utterance.lang = 'en-US'; // Set TTS language to English
      synth.speak(utterance);
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessages([...newMessages, { sender: 'bot', text: 'An error occurred. Please try again later.' }]);
    }
  };

  const handleVoiceInput = () => {
    setIsListening(true);
    recognition.start();
    recognition.onresult = (event) => {
      const voiceInput = event.results[0][0].transcript;
      setInput(voiceInput);
      setIsListening(false);
    };
    recognition.onspeechend = () => {
      recognition.stop();
      handleSend(); // Automatically send the message after voice input
      setIsListening(false);
    };
    recognition.onerror = (event) => {
      // console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };
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
              placeholder="Type or use voice..."
              className="chat-input"
            />
            <button onClick={handleSend}>Send</button>
            <button onClick={handleVoiceInput} className="voice-button">
              {isListening ? '🎤 Listening...' : '🎤'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
