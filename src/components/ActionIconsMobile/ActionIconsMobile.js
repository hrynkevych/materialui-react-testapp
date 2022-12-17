import * as React from 'react';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Divider, IconButton } from '@mui/material';
import ActionButtons from '../components/ActionIcons/ActionIconsStyled';

export default function ActionIconsMobile() {
  return (
    <Box position='fixed' sx={{bgcolor: 'inverse.main', top: 'auto', bottom: 0, width: '100%'}}>
      <ActionButtons color='primary' sx={{ display: 'flex', justifyContent: 'space-around'}}>
          <IconButton color='primary'>
              <FavoriteIcon />
          </IconButton>
          <Divider orientation='vertical' />
          <IconButton color='primary'>
              <PersonIcon />
          </IconButton>
          <Divider orientation='vertical' />
          <IconButton color='primary'>
              <NotificationsIcon />
          </IconButton>
      </ActionButtons>
    </Box>
  );
}