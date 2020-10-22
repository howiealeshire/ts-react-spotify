import React, {useState} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import MusicCard from './MusicCard'

import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
    Box, Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Link,
    Slide,
    Slider
} from "@material-ui/core";
import CenteredGrid from "./CenteredGrid";
import MusicCardRow from "./MusicCardRow";
import {PlayArrow} from "@material-ui/icons";
const messages = [
    {
        id: 1,
        primary: 'Brunch this week?',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Birthday Gift',
        secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
        person: '/static/images/avatar/1.jpg',
    },

];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            padding: theme.spacing(2, 2, 0),
        },
        paper: {
            paddingBottom: 50,
        },
        list: {
            marginBottom: theme.spacing(2),
            marginLeft: 250,
        },
        subheader: {
            backgroundColor: theme.palette.background.paper,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        appBar: {
            top: 'auto',
            bottom: 0,
            zIndex: 1400,
        },
        appBarCenter: {
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
        },

        grow: {
            flexGrow: 1,
        },
        fabButton: {
            position: 'absolute',
            zIndex: 1,
            top: -30,
            left: 0,
            right: 0,
            margin: '0 auto',
        },
        link: {
            paddingTop: 110,
            paddingBottom:121,
        },
        typography: {
            marginBottom: theme.spacing(2),
            marginLeft: 250,
            marginTop: 95,
        },
        root: {
            maxWidth: 345,
            background: "#f1f1f1",

        },
    }),
);

export default function BottomAppBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState<number>(30);
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    const handleChange = (event: any, newValue: number | number[]) => {
        setValue(newValue as number);
    };
    function FormRow() {
        const [isShown, setIsShown] = useState(false);

        return (
            <React.Fragment>
                    <MusicCard></MusicCard>
                    <MusicCard></MusicCard>
                    <MusicCard></MusicCard>
                    <MusicCard></MusicCard>
                    <MusicCard></MusicCard>
                    <MusicCard></MusicCard>
                    <MusicCard></MusicCard>
                    <MusicCard></MusicCard>
                    <MusicCard></MusicCard>

            </React.Fragment>
        );
    }


    return (
        <React.Fragment>
            <CssBaseline />
            <div style={{   overflowX: 'hidden'}}>
            <Grid container spacing={2} className={classes.typography} style={{
                width: '100%',

            }}>

                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>
                <MusicCardRow></MusicCardRow>



            </Grid>
            </div>

            <AppBar position="fixed"  color="primary" className={classes.appBar}>

                <Toolbar>
                    <Grid container xs={12}  direction="row" spacing={6}
                          justify="space-between"
                          alignItems="center"
                          style={{
                              width: '100%',
                          }}
                    >

                        {/*
                        <Grid item xs={12} style={{marginLeft:"auto"}} display="flex"  className={classes.appBarCenter} flexGrow={1}>
                        */}
                            <Grid container item alignItems="center"
                                    xs={1} spacing={3} sm={3}>
                                <Grid item xs={2}>
                                    <Avatar variant="square">
                                        N
                                    </Avatar>
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography noWrap>Song Title</Typography>
                                    <Typography noWrap>Artist Name</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton  color="inherit">
                                        <SearchIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton edge="end" color="inherit">
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container item xs={4} spacing={1} sm={3} justify="space-evenly" >
                                <Grid item xs={1}>
                                    <IconButton edge="start" color="inherit">
                                        <SearchIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton  color="inherit">
                                        <SearchIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton  color="inherit">
                                        <PlayArrow />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton  color="inherit">
                                        <SearchIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton edge="end" color="inherit">
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                                <Grid container item xs={1} spacing={1} sm={3} justify="center" style = {{minWidth: "290px"}}>
                                    <Grid item xs justify="flex-start"  >
                                        <Slider style={{color:"white", marginTop:30, marginLeft:-255}} value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                                    </Grid>
                                </Grid>


                                </Grid>
                            <Grid container item xs={1} spacing={5} sm={3} justify="flex-end" alignItems="center">
                                <Grid item xs={1}>
                                    <IconButton edge="start" color="inherit">
                                        <SearchIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton  color="inherit">
                                        <SearchIcon />
                                    </IconButton>
                                </Grid>

                                <Grid item xs={1}>
                                    <IconButton color="inherit">
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs justify="center" >
                                    <Slider style={{color:"white"}} value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                                </Grid>

                        </Grid>
                    </Grid>



                </Toolbar>

            </AppBar>
        </React.Fragment>
    );
}
