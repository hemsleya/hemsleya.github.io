import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WorkIcon from '@mui/icons-material/Work';import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import IconButton from "@mui/material/IconButton";
import MessageIcon from '@mui/icons-material/Message';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Toolbar from "@mui/material/Toolbar";

export default function TemporaryDrawer() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => () => {
        setOpen(!open);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {[{text:'Home', page:'/#/'},{text:'Experience',page:'/#/experience'}, {text:'Miscellaneous', page:'/#/misc'}, {
                    text:'Contact Me',
                    page:'/#/contact',
                }].map((button,index) => (
                    <ListItem key={button.text} disablePadding >
                        <ListItemButton to={button.page}>
                            <ListItemIcon>
                                {index === 0 ? <HomeIcon /> : index === 1 ? <WorkIcon /> : index === 2 ? <FingerprintIcon /> : index === 3 ? <MessageIcon /> : null}
                            </ListItemIcon>
                            <ListItemText primary={button.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <IconButton
                onClick={toggleDrawer(true)}
                size="large"
                edge="start"
                color="#000"
                aria-label="menu"
                sx={{ mr: 2, display: { md: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)} sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}>
                <Toolbar sx={{p: '20px'}}/>
                {DrawerList}
            </Drawer>
        </div>
    );
}