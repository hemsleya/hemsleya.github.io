
import * as React from 'react';
import '../../index.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import theme from '../Themes/Themes.js';
import {ThemeProvider} from "@mui/material";
import TemporaryDrawer from "../Menu/TemporaryDrawer";
import PermanentDrawerLeft from "../Menu/PermanentDrawer";

export default function TopBar() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, bgcolor:'primary.main', width:"100%"}}>

                <AppBar position="relative"  sx={{paddingLeft:'20px',zIndex: 'tooltip'}}>
                    <Toolbar>
                        <TemporaryDrawer sx={{paddingRight:'50px'}}/>
                        <Typography variant="h5" component="div" sx={{ display: { xs: 'none', md: 'block' },justifyContent:'center', flexGrow: 1, fontFamily: 'Roboto Slab', fontWeight:'600', letterSpacing:'calc(8vmin)',paddingLeft:'50px'}}>
                            Amber Hemsley
                        </Typography>
                        <Typography variant="subtitle1" component="div" sx={{ display: { xs: 'none', sm: 'block', md:'none' },justifyContent:'center', flexGrow: 1, fontFamily: 'Roboto Slab', fontWeight:'600', letterSpacing:'calc(4vmin)'}}>
                            Amber Hemsley
                        </Typography>
                        <Typography variant="subtitle2" component="div" sx={{ display: { xs: 'block', sm: 'none' },justifyContent:'center', flexGrow: 1, fontFamily: 'Roboto Slab', fontWeight:'600', letterSpacing:'calc(2vmin)'}}>
                            Amber
                        </Typography>
                        <Button color="inherit" href="./Amber-Hemsley-CV.pdf" download="Amber-Hemsley-CV">Download CV</Button>
                    </Toolbar>
                </AppBar>
            </Box>
                <PermanentDrawerLeft/>
        </ThemeProvider>
    );
}