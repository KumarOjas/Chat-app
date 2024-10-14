// src/App.js
import React from 'react';
import { Container, Box } from '@mui/material';
import ChatDisplay from './components/ChatDisplay';
import MessageInput from './components/MessageInput';

const App = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <ChatDisplay />
        <MessageInput />
      </Box>
    </Container>
  );
};

export default App;
