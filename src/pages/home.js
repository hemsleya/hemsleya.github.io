import logo from '../logo.svg';
import '../App.css';
import App from "../App";
import React from "react";
import Box from "@mui/material/Box";
import theme from "../components/Themes/Themes";
import {Grid, ThemeProvider} from "@mui/material";
import PermanentDrawer from "../components/Menu/PermanentDrawer";
import MenuBlock from "../components/Menu/block";


function timeSince(date) {

        var seconds = Math.floor((new Date() - date) / 1000);

        var interval = seconds / 31536000;

        if (interval > 1) {
            return Math.floor(interval);
        }
}

var age = timeSince(new Date(2002, 9, 7));


const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charSet="UTF-8"/>
                <title>Home</title>
            </head>
            <div className="App" style={{
                display: 'flex',
                justifyContent: 'center',}}>
                <MenuBlock/>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    paddingRight: '10px',
                }}>
                    <Box sx={{
                        width: 'calc(40px + 50vmin)',
                        height: 'fit-content',
                        borderRadius: 1,
                        display:"flex",
                        alignItems:"flex-start",
                        justifyContent:"flex-start",
                        flexDirection:"column",
                        p:3,
                        paddingRight: '10px',
                        fontFamily: 'Roboto Slab',
                        color: 'text.primary',
                    }}>
                    <header className="Header2">About Me</header>
                        <p>
                            I am {age} years old and I'm a software engineer with experience in Go, Java, Python and C#.
                        </p>
                        <p>
                            I am currently studying Computer Science at the University of York going starting my third year this September.
                        </p>
                    </Box>
                    <Box sx={{
                        height: 'fit-content',
                        width: 'fit-content',
                        borderRadius: 1,
                        display:"flex",
                        justifyContent:"center",
                        p:3,
                        paddingRight: '10px',
                    }}>
                        <img src="./media/devonCropped.JPG" alt="logo" style={{height:'40vmin'}}/>
                    </Box>
                </Box>
            </div>
            );
        </ThemeProvider>
    );
};

export default Home;