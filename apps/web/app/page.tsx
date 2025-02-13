"use client";
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const Page: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/login'); 
  };
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
        <Typography variant="h6" component="h2" gutterBottom>
          Please log in to continue.
        </Typography>
        <Typography variant="body1" paragraph>
          This application requires authentication.  Please log in using the button below to access the application.
        </Typography>

        {/* <Link href="/login" passHref legacyBehavior> {/* Link to your login/home page */}
          <Button variant="contained" color="primary" onClick={handleClick}>
            Log In
          </Button>
        {/* </Link> */} 


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