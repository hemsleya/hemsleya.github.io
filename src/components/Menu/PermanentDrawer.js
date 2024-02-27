import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import MessageIcon from "@mui/icons-material/Message";
import {useNavigate } from 'react-router-dom';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex'}}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                    display: { xs: 'none', md: 'block' },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar sx={{p: '20px'}}/>
                <List>
                    {[{text:'Home', page:'/'},{text:'Experience',page:'/experience'}, {text:'Miscellaneous', page:'/misc'}, {
                        text:'Contact Me',
                        page:'/contact',
                    }].map((button,index) => (
                        <ListItem key={button.text} disablePadding >
                            <ListItemButton onClick={() => navigate(button.page)}>
                                <ListItemIcon>
                                    {index === 0 ? <HomeIcon /> : index === 1 ? <WorkIcon /> : index === 2 ? <FingerprintIcon /> : index === 3 ? <MessageIcon /> : null}
                                </ListItemIcon>
                                <ListItemText primary={button.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
