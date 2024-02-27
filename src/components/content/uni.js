import '../../App.css';
import React , { useState, useEffect }from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import {Paper, TextField} from "@mui/material";


const Uni = () => {
    return (
        <Box sx={{width:'80vw'}}>
            <Typography variant="h6" sx={{fontWeight:'bold', fontFamily:"Roboto Slab"}}>Modules</Typography>
            <Typography variant="subtitle1" sx={{fontWeight:'bold', fontFamily:"Roboto Slab"}}>First Year - 2021/22</Typography>
            <Typography variant="body2">
                Software 1 – 96%<br/>
                Theory 1 – 90%<br/>
                Software 2 – 76%<br/>
                Theory 2 – 92%<br/>
                Human Computer Interaction 1 – 81%<br/>
                Systems and Devices 1 – 85%<br/>
                Data 1 – 77%<br/>
                <br/>
            </Typography>
            <Typography variant="subtitle1" sx={{fontWeight:'bold', fontFamily:"Roboto Slab"}}>Second Year - 2022/23</Typography>
            <Typography variant="body2">
                Engineering 1 – 66%<br/>
                Systems and Devices 2 – 61%<br/>
                Systems and Devices 3 – 71%<br/>
                Theory 3 – 85%<br/>
                Human Computer Interaction 2 – 73%<br/>
                Software 3 – 88%<br/>
                Data 2 – 86%<br/>
                Intelligent Systems 1 – 78%<br/>
                Intelligent Systems 2 – 71%<br/>
            </Typography>
            <br/>
            <Typography variant="h6">Key Projects</Typography>
            <br/>
            <Typography variant="subtitle1">Engineering 1</Typography>
            <Typography variant="body1">
                The engineering 1 module in my second year involved a group project to build a game in Java based of requirements
                provided by the lecturer. The game was a simplified version of the video game "Overcooked" where the player had to
                manage a kitchen and serve customers. The game was built in Java using the LibGDX library and half way through the module
                we were required to swap projects with another group and continue development. This was a great experience as it allowed
                us to see how other groups had approached the same problem and how they had structured their code. It also allowed us to
                practice reading and understanding other people's code which is a valuable skill in the industry.
            </Typography>
            <br/>
        </Box>
    );
};

export default Uni;

