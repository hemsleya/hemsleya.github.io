import '../../App.css';
import React , { useState, useEffect }from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import {Paper, TextField} from "@mui/material";


const School = () => {
    return (
        <Box sx={{width:'80vw'}}>
            <Typography variant="h6" sx={{fontWeight:'bold', fontFamily:"Roboto Slab"}}>Alevels</Typography>
            <Typography variant="body2">
                Computer Science – A*<br/>
                Maths – A*<br/>
                Physics – A<br/>
                Further Maths AS – A<br/>
                <br/>
            </Typography>
            <Typography variant="h6" sx={{fontWeight:'bold', fontFamily:"Roboto Slab"}}>GCSE</Typography>
            <Typography variant="body2">
                Sciences, Maths, PE – 9<br/>
                English Language, History, Spanish, Computer Science – 7<br/>
                Further Maths – A*<br/>
                English Literature – 6<br/>
                <br/>
            </Typography>
            <br/>
            <Typography variant="h6" sx={{fontWeight:'bold', fontFamily:"Roboto Slab"}}>Key Projects</Typography>
            <br/>
            <Typography variant="subtitle1">A-level Computer Science Project</Typography>
            <Typography variant="body1">
                My A-level computer science project was to create a program to introduce people to the basics of the game DnD.
                This stemmed from a personal need as my friends kept asking me to join their campaigns but even creating a character was
                far from simple. I used C# to create a mini game where the user could create a character with inputs for names and buttons to
                roll dice for stats. This visualised the process making it easier for new players to understand. I also included a battle field
                with a grid map and a turn based system to simulate movement in combat. The player moved at different speeds depending on their
                stats and terrain with an ememy chasing them using a pathfinding algorithm. This project was a great learning experience as it was
                my first proper coding project and I had improve my coding skills as well as my time management. Unfortunately due to covid I was unable
                to complete the project to the standard I wanted but I still learnt a lot from it.
            </Typography>
            <br/>
            <Typography variant="h6" sx={{fontWeight:'bold', fontFamily:"Roboto Slab"}}>Extra Curricular</Typography>
            <Typography variant="subtitle1" sx={{fontWeight:'bold', fontFamily:"Roboto Slab"}}>
                <a href="https://astro-pi.org/mission-space-lab/">Astro Pi Mission Space Lab</a>
            </Typography>
            <Typography variant="body2">
                <p>
                    I was part of a team that entered the Astro Pi Mission Space Lab competition.
                    We wrote a python program to run on the International Space Station and it was successfully run in space.
                    <br/>
                    Our program used sensors on the Astro Pi to measure the acceleration of the ISS and the strength of earths
                    magnetic fields to try to determine the energy which could be created using the generator effect.
                    <br/>
                    This project allowed us to combine our studies in physics and computer science and was a great experience
                    despite our results not being what we expected.
                    (We calculated that the energy created by the ISS moving through earths magnetic
                    field would be a significant amount but a separate study, completed by someone presumably a lot smarter
                    than three 17 year olds, found it was negligible)
                    <br/><br/>
                </p>
            </Typography>
            <Typography variant="subtitle1" sx={{fontWeight:'bold', fontFamily:"Roboto Slab"}}>
                <a href="https://www.ncsc.gov.uk/cyberfirst/girls-competition">Cyber First Girls Competition</a>
            </Typography>
            <Typography variant="body2">
                <p>
                    In year 8 I entered the Cyber First girls competition as part of a team. We had very little knowledge of
                    cyber security at this point but we were able to complete the first round of the competition. It was a
                    key experience in my decision to pursue a career in computer science and left me wanting to learn more
                    about the field.
                    <br/>
                </p>
            </Typography>
        </Box>
    );
};

export default School;

