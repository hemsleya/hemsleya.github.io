import '../../App.css';
import React , { useState, useEffect }from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";


const Work = () => {
   return (
        <Box sx={{width:'inherit'}}>
            <Typography variant="h5" sx={{fontWeight:'bold', fontFamily:"Roboto Slab"}}>Software Engineer @ DOJO</Typography>
            <Typography variant="h6">September 2021 - Present</Typography>
            <Typography variant="body1">
                <List sx={{p:'10px', paddingRight:'60px'}}>
                    <ListItem sx={{paddingY:'2px', overflow:'wrap', maxWidth:'inherit'}}>- Contributed to the maintenance and
                        creation of Dojo’s public APIs in Golang connecting terminals to points of sale through both websockets and REST</ListItem>
                    <ListItem sx={{paddingY:'2px'}}>- Gained experience working with redis, mongo and kubernetes</ListItem>
                    <ListItem sx={{paddingY:'2px'}}>- Paired on the development of a new web application for the company’s internal use</ListItem>
                    <ListItem sx={{paddingY:'2px'}}>- Independently coded and deployed a back end integration to DOJO's Tables API using Golang and Kubernetes</ListItem>
                </List>
            </Typography>
            <br/>
            <Typography variant="h6">Key Projects</Typography>
            <br/>
            <Typography variant="subtitle1">Dojo Tables API integration</Typography>
            <Typography variant="body1">
                In order to familiarise myself with the product and to develop my knowledge base I independently coded and
                deployed a back end integration to DOJO's <a href="https://docs.dojo.tech/tables">Tables API</a> using Golang and Kubernetes.
                This acted as a point of sale system which allowed a terminal to connect and pay bills assigned to 3 different tables.
                One all the tables were paid the bills were reset using randomised amounts so it could be used again.
                This also helped me to understand our partner's integration process and how to best support them when designing our APIs.
            </Typography>
            <br/>
            <Typography variant="subtitle1">New API development</Typography>
            <Typography variant="body1">
                I contributed to the architecture and schema design of a new API for the company’s internal use. This involved a much more indepth understanding
                of the technology stack and why we make certain design decisions. I also had to consider our first line of customers, how they would interact with the API,
                and what requirements they would have. This was a great learning experience particularly for working in parallel with other developers as
                the whole team was contributing to the same service at once.
            </Typography>
            <br/>
            <Typography variant="h5" sx={{fontWeight:'bold', fontFamily:"Roboto Slab"}}>Crew @ French Brothers</Typography>
            <Typography variant="h6">June 2019 - September 2021</Typography>
            <Typography variant="body1">
                <List sx={{p:'10px', paddingRight:'60px'}}>
                    <ListItem sx={{paddingY:'2px', overflow:'wrap', maxWidth:'inherit'}}>- Developed customer service skills greeting up to 100 passengers
                        boarding/disembarking the vessel per trip and serving drinks during trips and at private hire events</ListItem>
                    <ListItem sx={{paddingY:'2px'}}>- Responded to passengers’ complaints and questions helpfully and politely, relaying any issues to senior members of
                        staff</ListItem>
                    <ListItem sx={{paddingY:'2px'}}>- Trained three new employees in company procedures and techniques</ListItem>
                </List>
            </Typography>
        </Box>
    );
};

export default Work;

