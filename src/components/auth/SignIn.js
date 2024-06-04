import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock authentication logic
    if (email === 'user@example.com' && password === 'password') {
      // Navigate to the profile page upon successful sign-in
      navigate('/swipe');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <TextField 
        label="Email" 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        fullWidth 
        margin="normal" 
      />
      <TextField 
        label="Password" 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        fullWidth 
        margin="normal" 
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Sign In
      </Button>
    </form>
  );
};

export default SignIn;
