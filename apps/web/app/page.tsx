"use client";
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import AuthInformation from './components/organisms/AuthInformation';
import UserList from './components/organisms/UserList';

const Page: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // Vertically center content
          minHeight: '80vh', // Ensure content takes up at least full viewport height
          textAlign: 'center',
          mt: 8 // Add some top margin
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to The Application
        </Typography>
        
        <AuthInformation />

        <UserList />
        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Darizki Pratama @2025
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Page;