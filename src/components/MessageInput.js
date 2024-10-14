// src/components/MessageInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage, receiveMessage } from '../features/ChatSlice';
import { Box, TextField, Button } from '@mui/material';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  // Array of possible bot responses
  const botResponses = [
    "That's interesting! Tell me more.",
    "I'm not sure I understand, could you explain?",
    "Oh, really? Why do you think that?",
    "Haha, that's funny!",
    "Hmm, I haven't thought about it that way.",
    "Good point. What else?",
    "I agree with you!",
    "That's a great question!",
    "I'm here, just processing your message.",
    "Sorry, I was lost in thought. What were you saying?"
  ];

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      // Dispatch action to add the user's message
      dispatch(sendMessage({ text: message }));
      setMessage('');

      // Simulate a bot response with a delay
      setTimeout(() => {
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        dispatch(receiveMessage({ text: randomResponse }));
      }, 1000); // Delay of 1 second
    }
  };

  return (
    <Box sx={{ display: 'flex', mt: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage} sx={{ ml: 1 }}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
