import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, ListItemButton, List, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu.js';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Box } from '@mui/system';
import { useState } from 'react';
import ActionButtons from '../ActionButtons/ActionButtons';

function Header() {
    const [anchorElm, setAnchorElm] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setAnchorElm(null);
        setOpen(false);
    }

    const handleClick = (e) => {
        setAnchorElm(e.currentTarget);
        setOpen(true);
    }

    return (
        <>
            <AppBar color='white' sx={{color: 'black', height: '6.4rem'}}>
                <Toolbar sx={{height: '100%'}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}} component='div'>
                        {/* <Box>
                            <IconButton>
                                <MenuIcon />
                            </IconButton>
                        </Box> */}

                        <Typography color='secondary' sx={{fontFamily: 'La Belle Aurore', fontSize: '46px'}} variant='h3' component="div">
                            Cats & friends
                        </Typography>
                        <List sx={{display: 'flex', fontSize: '15px'}}>
                            <ListItemButton>
                                <Typography variant='inherit' component="div">
                                    HOME
                                </Typography>
                            </ListItemButton>
                            <ListItemButton>
                                <Typography variant='inherit' component="div">
                                    VOLUNTEER
                                </Typography>
                            </ListItemButton>
                            <ListItemButton>
                                <Box sx={{display: 'flex', alignItems: 'center'}} onClick={handleClick}>
                                    <Typography variant='inherit' component="div">
                                        STORIES
                                    </Typography>
                                    <ExpandMoreIcon sx={{fontSize: '18px'}} />
                                </Box>
                                <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
                                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                                </Menu>
                            </ListItemButton>
                            <ListItemButton>
                                <Typography variant='inherit' component="div">
                                    LOGIN
                                </Typography>
                            </ListItemButton>
                        </List>
                        <ActionButtons sx={{display: 'flex', gap: '2rem', marginRight: '0.625rem', marginLeft: '0.625rem'}}>
                            <IconButton color='muted'>
                                <FavoriteIcon />
                            </IconButton>
                            <Divider orientation='vertical' />
                            <IconButton color='muted'>
                                <PersonIcon />
                            </IconButton>
                            <Divider orientation='vertical' />
                            <IconButton color='muted'>
                                <NotificationsIcon />
                            </IconButton>
                        </ActionButtons>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;