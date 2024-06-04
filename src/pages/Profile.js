import React from 'react';
import { Button } from '@mui/material';

const Profile = () => {
  // Fetch user data from backend
  const user = {
    username: 'John Doe',
    bio: 'Just a guy who loves coding.',
    profilePictureUrl: 'path_to_image.jpg'
  };

  return (
    <div className="p-4">
      <img src={user.profilePictureUrl} alt="Profile" className="rounded-full w-32 h-32" />
      <h2 className="text-2xl">{user.username}</h2>
      <p>{user.bio}</p>
      <Button variant="contained" color="primary">Edit Profile</Button>
    </div>
  );
};

export default Profile;
