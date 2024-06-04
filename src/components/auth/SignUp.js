import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <TextField 
        label="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        fullWidth 
        margin="normal" 
      />
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
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;
