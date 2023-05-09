import React from 'react';
import { Typography } from '@mui/material';

const MainPage = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Welcome to the Main Page
      </Typography>
      <Typography variant="body1">
        This is the main page of the application, accessible only to authenticated users.
      </Typography>
    </div>
  );
};

export default MainPage;
