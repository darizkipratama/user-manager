"use client";
import React from 'react';
import { Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/auth';
import Button from '../atoms/Button';

const AuthInformation: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  function handleClickLogin(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    router.push('/login'); 
  }
  return (
    <Box sx={{ mb: 4 }}>
      {isAuthenticated ? (
        <>
          <Typography variant="h6">Welcome, User!</Typography>
          <Button label="Logout" variant="contained" color="secondary" onClick={logout} />
        </>
      ) : (
        <>
          <Typography variant="h6" component="h2" gutterBottom>
            Please log in to continue.
          </Typography>
          <Typography variant="body1">
            This application requires authentication.  Please log in using the button below to access the application.
          </Typography>
          <Button label="Login" variant="contained" color="primary" onClick={handleClickLogin}/>
        </>
      )}
    </Box>
  );
};

export default AuthInformation;