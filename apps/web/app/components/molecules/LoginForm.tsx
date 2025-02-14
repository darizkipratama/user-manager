"use client";
import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { auth } from '../../config/authConfig';
import { useAuth } from '../../context/auth';

const LoginForm: React.FC = () => {
    const router = useRouter();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission
        console.log('Email:', email);
        console.log('Password:', password);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            login();
            router.push('/');
        } catch (error) {
            setError('Failed to log in. Please check your credentials.');
        }
    };

    return (
        <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, margin: 'auto', mt: 8 }}>
            <Box component="form" onSubmit={handleSubmit} 
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h5" align="center">Login</Typography>
                {error && <Typography color="error">{error}</Typography>}
                <Input
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button label="Login" variant="contained" color="primary" type='submit'/>
            </Box>
        </Paper>
    );
};

export default LoginForm;