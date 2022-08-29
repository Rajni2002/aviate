import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './styles.css'


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, padding: '2rem' }}>
      <AppBar
        position="static"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '1rem'
        }}
        className="container"
      >
        <Typography
          variant="h3"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold', color: 'black'}}
          align="left">
          Jobby
        </Typography>
        <AccountCircleIcon sx={{ marginTop: '.7rem', fontSize: '2.5rem', color: 'black' }} />
      </AppBar>
    </Box>
  );
}