import logo from '../logo.svg';
import '../App.css';
import App from "../App";
import PermanentDrawer from "../components/Menu/PermanentDrawer";
import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import {Card, CardActions, CardContent, Chip, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Block from "../components/Menu/block";

const Contact = () => {
    return (
        <div className="contact-page">
            <head>
                <meta charSet="UTF-8"/>
                <title>Contact</title>

            </head>
            <body>

                <div style={{display:"flex",justifyContent: "flex-start", padding:`20px`}}>
                    <Block/>
                    <Grid container spacing={0} maxWidth='500px' padding='20px'>
                        <Grid item xs={4}>
                            <Chip label="Email:" icon={<AlternateEmailIcon  sx={{color:'#0077b5'}}/>} sx={{backgroundColor:'rgba(0, 0, 0, 0)', fontSize:'calc(0.5vw + 12px)'}}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Chip label={<a href="mailto:amberhemsley02@gmail.com" style={{color:'#DA8FB1'}}> amberhemsley02@gmail.com</a>}
                                  sx={{backgroundColor:'rgba(0, 0, 0, 0)', fontSize:'calc(0.5vw + 12px)'}}/>
                        </Grid>
                        <Grid item xs={4}>
                            <Chip label="LinkedIn:" icon={<LinkedInIcon  sx={{color:'#0077b5'}}/>} sx={{backgroundColor:'rgba(0, 0, 0, 0)', fontSize:'calc(0.5vw + 12px)'}}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Chip label={<a href="https://uk.linkedin.com/in/amber-hemsley-7061971b8" style={{color:'#DA8FB1'}}> Amber Hemsley</a>}
                                  sx={{backgroundColor:'rgba(0, 0, 0, 0)', fontSize:'calc(0.5vw + 12px)'}}/>
                        </Grid>
                    </Grid>
                </div>
            </body>
        </div>
    );
};

export default Contact;