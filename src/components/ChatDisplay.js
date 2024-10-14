// src/components/ChatDisplay.js
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';

const ChatDisplay = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box sx={{ height: '400px', overflowY: 'auto', p: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
      {messages.map((msg, index) => (
        <Box key={index} sx={{ mb: 2, textAlign: msg.user === 'Bot' ? 'left' : 'right' }}>
          <Typography variant="body2" color="textSecondary">
            {msg.timestamp}
          </Typography>
          <Typography variant="body1" sx={{ bgcolor: msg.user === 'Bot' ? '#f0f0f0' : '#cfe8fc', p: 1, borderRadius: '4px', display: 'inline-block' }}>
            {msg.text}
          </Typography>
        </Box>
      ))}
      <div ref={chatEndRef} />
    </Box>
  );
};

export default ChatDisplay;
