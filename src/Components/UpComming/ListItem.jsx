import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ListItem() {
  return (
    <Box sx={{ minWidth: 200 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Aviate
          </Typography>
          <Typography variant="h5" component="div">
            Telephonic Interview
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            4:00PM - 2:00PM
          </Typography>
          <Typography variant="body2">
            <a href='#'>Details</a>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
