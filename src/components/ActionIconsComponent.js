import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function ActionIcons() {
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
        <BottomNavigationAction style={{ color: '#F7ECDE'}} icon={<FavoriteIcon />} />
        <BottomNavigationAction style={{ color: '#F7ECDE'}} icon={<PersonIcon />} />
        <BottomNavigationAction style={{ color: '#F7ECDE'}} icon={<NotificationsIcon />} />
      </BottomNavigation>
    </Box>
  );
}