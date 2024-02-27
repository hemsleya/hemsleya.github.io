import logo from '../logo.svg';
import '../App.css';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import PermanentDrawer from "../components/Menu/PermanentDrawer";
import React from "react";
import theme from "../components/Themes/Themes";
import MenuBlock from "../components/Menu/block";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import Work from "../components/content/work";
import Uni from "../components/content/uni";
import School from "../components/content/school";
import {ImageList, ImageListItem, ThemeProvider} from "@mui/material";
import Typography from "@mui/material/Typography";
import PetsIcon from '@mui/icons-material/Pets';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const Misc = () => {
    const sectionStyle={
        width: '100%',
        height: 'fit-content',
        borderRadius: 1,
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"center",
        flexDirection:"column",
        p:3,
        fontFamily: 'Roboto Slab',
        color: 'text.primary',}
    return (
        <ThemeProvider theme={theme}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charSet="UTF-8"/>
                <title>Misc</title>
            </head>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '100%'}}>
                <MenuBlock/>
                <div style={{display: "flex", position:'relative',width:'100vmin', flexDirection:'column'}}>
                    <div style={{display: "flex", padding:'10px'}}>
                        <Box sx={sectionStyle}>
                            <Typography variant="h5" sx={{fontFamily:"Aqua"}}>More About Me</Typography>
                            <Typography variant="h6" sx={{fontWeight:'bold', fontFamily:"Roboto Slab"}}>Hobbies</Typography>
                            <Typography variant="body2"><br/>
                                I attended Pat Steel School of Dance for 15 years including competing in local competitions throughout
                                secondary school. I took classes in ballet, tap, modern and contemporary taking graded exams and performing
                                in a biannual show. I also performed in my local pantomime though the dance school.

                            </Typography>
                        </Box>
                        <img src="./media/dance.JPG" alt="logo" style={{height:'50vmin'}}/>
                    </div>
                    <div style={{display: "flex", padding:'10px'}}>
                        <img src="./media/hockey.JPG" alt="logo" style={{height:'50vmin'}}/>
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            display:"flex",
                            alignItems:"flex-start",
                            justifyContent:"space-between",
                            flexDirection:"column",
                            fontFamily: 'Roboto Slab',
                            color: 'text.primary',}}>
                            <Typography variant="body2" sx={{p:'10px'}}>
                                I have played hockey since I was 3 years old. I was a member of University of York Hockey Club
                                Ladies 3rd team playing defence. I competed in weekly BUCs cup and league matches as well as in the
                                annual Roses competition against lancaster. University also gave me the opportunity to play lacrosse
                                and netball on a more casual basis.

                            </Typography>
                            <img src="./media/shortCorner.JPG" alt="logo" style={{width:'inherit'}}/>
                        </Box>
                    </div>
                    <div style={{display: "flex", padding:'10px'}}>
                        <Box sx={sectionStyle}>
                            <br/>
                            <Typography variant="h6"><PetsIcon sx={{color:'#e8bacf'}}/> Arya <PetsIcon sx={{color:'#e8bacf'}}/></Typography>
                            <Typography variant="body2"><br/>
                                My cat :)<br/>
                            </Typography>
                        </Box>
                        <ImageList
                            sx={{ height: '60vmin' }}
                            variant="quilted"
                            cols={3}
                            rowHeight={'auto'}
                        >
                            {catPhotos.map((item) => (
                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                    <img
                                        {...srcset(item.img, 121, item.rows, item.cols)}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                </div>
            </div>

        </ThemeProvider>
    );
};

export default Misc;


const catPhotos = [
    {
        img: "./media/cat1.JPG",
        title: 'cat',
    },
    {
        img: "./media/cat3.JPG",
        title: 'cat',
    },
    {
        img: "./media/cat2.JPG",
        title: 'cat',
    },
];