import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }} 
        style={{ color: '#F7ECDE', backgroundColor: '#2C3333' }} 
      >
        <BottomNavigationAction style={{ color: '#F7ECDE'}} icon={<FacebookIcon />} />
        <BottomNavigationAction style={{ color: '#F7ECDE'}} icon={<TwitterIcon />} />
        <BottomNavigationAction style={{ color: '#F7ECDE'}} icon={<InstagramIcon />} />
      </BottomNavigation>
    </Box>
  );
}