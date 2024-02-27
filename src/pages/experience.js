import logo from '../logo.svg';
import '../App.css';
import App from "../App";

import PermanentDrawer from "../components/Menu/PermanentDrawer";
import React from "react";
import theme from "../components/Themes/Themes";
import MenuBlock from "../components/Menu/block";
import Box from "@mui/material/Box";
import {Chip, ThemeProvider} from "@mui/material";
import Tab from "@mui/material/Tab"
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Work from "../components/content/work";
import Uni from "../components/content/uni";
import School from "../components/content/school";
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import IconButton from "@mui/material/IconButton";


const Experience = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event , newValue) => {
        setValue(newValue);
    };

    const tabStyle = (minWidth) =>{
        return {
            flexDirection: 'row',
            justifyContent: 'center',
            width: '14vmin',
            minWidth: minWidth,
            padding: '0px 5px 0px 5px',
            fontSize: 'calc(1vw + 10px)',
            fontFamily: 'Aqua',
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charSet="UTF-8"/>
                <title>Experience</title>
            </head>
            <div className="App" style={{
                display: 'flex',
                justifyContent: 'flex-start'}}>
                <MenuBlock/>
                <Box sx={{
                    width: '100vmin',
                    height: 'fit-content',
                    borderRadius: 1,
                    display:"flex",
                    alignItems:"flex-start",
                    justifyContent:"center",
                    flexDirection:"column",
                    p:3,
                    fontFamily: 'Roboto Slab',
                    color: 'text.primary',
                }}>
                    <IconButton href="https://github.com/hemsleya?tab=repositories" sx={{color:'#0077b5'}} ><Chip label="Github" icon={<GitHubIcon  sx={{color:'#0077b5'}}/>} sx={{backgroundColor:'rgba(0, 0, 0, 0)', fontSize:'calc(0.5vw + 12px)'}}/></IconButton>
                    <br/>
                    <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', width: 'inherit', fontSize: "calc(1vw + 10px)"}}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                              textColor="primary.dark"
                              indicatorColor="secondary"
                              variant="fullWidth"
                              sx={{width: 'fit-content'}}>
                            <Tab sx={tabStyle('50px')} label="Work" value={'1'}/>
                            <Tab sx={tabStyle('50px')} label="Uni" value={'2'}/>
                            <Tab sx={tabStyle('100px')} label="School" value={'3'}/>
                        </Tabs>
                    </Box>
                    <TabPanel value={'1'} index={0}>
                        <Work/>
                    </TabPanel>
                    <TabPanel value={'2'} index={1}>
                        <Uni/>
                    </TabPanel>
                    <TabPanel value={'3'} index={2}>
                        <School/>
                    </TabPanel>
                    </TabContext>
                </Box>

            </div>
        </ThemeProvider>

    );
};

export default Experience;