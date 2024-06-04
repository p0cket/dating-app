import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

const Chat = ({ matchId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch messages for the match
    setMessages([
      // Mock messages
      { id: 1, senderId: '1', content: 'Hello!', timestamp: '2023-01-01T10:00:00Z', likes: [] },
      { id: 2, senderId: '2', content: 'Hi there!', timestamp: '2023-01-01T10:05:00Z', likes: [] }
    ]);
  }, [matchId]);

  const handleSend = () => {
    // Send message logic
    setMessages([...messages, { id: Date.now(), senderId: '1', content: newMessage, timestamp: new Date().toISOString(), likes: [] }]);
    setNewMessage('');
  };

  const handleLike = (messageId) => {
    // Handle liking a message
    setMessages(messages.map(msg => msg.id === messageId ? { ...msg, likes: [...msg.likes, { userId: '1', timestamp: new Date().toISOString() }] } : msg));
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        {messages.map(message => (
          <div key={message.id} className="p-2 bg-gray-100 rounded mb-2">
            <p>{message.content}</p>
            <Button size="small" onClick={() => handleLike(message.id)}>Like ({message.likes.length})</Button>
          </div>
        ))}
      </div>
      <TextField 
        label="New Message" 
        value={newMessage} 
        onChange={(e) => setNewMessage(e.target.value)} 
        fullWidth 
        margin="normal" 
      />
      <Button variant="contained" color="primary" onClick={handleSend}>Send</Button>
    </div>
  );
};

export default Chat;
