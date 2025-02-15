import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/userSlice';
import { useAuth } from '../../context/auth';
import { User } from '@repo/models/user'; 

interface EditUserFormProps {
    user: User;
    onSave: (user: User) => void;
}


const EditUserForm: React.FC<EditUserFormProps> = (
    {
        user,
        onSave, 
    }
) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [error, setError] = useState('');

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !email) {
      setError('All fields are required.');
      return;
    }
    const updatedUser: User = { ...user, name, email };
    try{
        const response = await fetch('http://localhost:3000/api/users/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer $3cr3tT0k3n'
            },
            body: JSON.stringify(updatedUser),  
        });
        if (!response.ok) {
            throw new Error('Failed to update user');
        }
        dispatch(updateUser(updatedUser));
        onSave(updatedUser);
    } catch(error) {    
        setError('Failed to update user');
    }
    
  };

  return (
    
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: 'auto', mt: 8 }}>
        {isAuthenticated ? (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h5" align="center">Edit User</Typography>
          {error && <Typography color="error" align="center">{error}</Typography>}
          <Input
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button label="Save" variant="contained" color="primary" type="submit" />
        </Box>
      ) : (
        <></>
      )}
      </Paper>
  );
};

export default EditUserForm;