import React from 'react';
import { Typography, Paper } from '@mui/material';

const Profile = () => {
  return (
    <Paper style={{ padding: 24 }}>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Typography variant="body1">Profile details go here.</Typography>
    </Paper>
  );
};

export default Profile;
