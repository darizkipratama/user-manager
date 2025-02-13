import React from 'react';
import { Typography, Box } from '@mui/material';
import { useAuth } from '../../context/auth.js';
import Button from '../atoms/Button.js';

const AuthInformation: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Box sx={{ mb: 4 }}>
      {isAuthenticated ? (
        <>
          <Typography variant="h6">Welcome, User!</Typography>
          <Button label="Logout" variant="contained" color="secondary" onClick={logout} />
        </>
      ) : (
        <Typography variant="h6">You are not logged in.</Typography>
      )}
    </Box>
  );
};

export default AuthInformation;