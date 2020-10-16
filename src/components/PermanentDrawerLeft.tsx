import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Avatar, Box, IconButton, Paper} from '@material-ui/core';
import logo from '../images/1280px-Spotify_logo_with_text.svg.png'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },

        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        button: {
            height: 12,
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        // necessary for content to be below app bar
        //toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }),
);

export default function PermanentDrawerLeft() {
    const classes = useStyles();
    const a = [1,2,3,4,5,6,7,8,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
    const [age, setAge] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Box display="flex">


                    <IconButton> <ArrowBackIosIcon></ArrowBackIosIcon> </IconButton>
                    <IconButton> <ArrowForwardIosIcon></ArrowForwardIosIcon> </IconButton>


                    </Box>
                    <Box style={{marginLeft:"auto"}} display="flex" justifyContent="flex-end" alignItems="center">
                        <Avatar>H</Avatar>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">User Id</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Account</MenuItem>
                                <MenuItem value={20}>Profile</MenuItem>
                                <MenuItem value={30}>Logout</MenuItem>
                            </Select>

                        </FormControl>

                    </Box>

                </Toolbar>

            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
                style={{maxHeight: 200, overflow: 'auto'}}
            >
                <Box display="flex" flexDirection="column">
                <div className={classes.root} />
                <img style={{height: 70,backgroundColor:'black',maxWidth: 240,padding:8, overflow: 'auto'}} src={logo} alt="Logo" className="photo"/>
                <Divider />

                <List>
                    {['Home', 'Search', 'Your Library'].map((text, index) => (
                        <ListItem style={{height: 35}} button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}

                </List>

                <Typography style={{paddingLeft:18, paddingTop:18}} paragraph> PLAYLISTS </Typography>
                <List style={{marginTop:-20}}>
                    {['Create Playlist', 'Liked Songs'].map((text, index) => (
                        <ListItem  style={{height: 35}} button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

                    <Paper style={{height:145,maxHeight: 200, overflow: 'auto'}}>

                        <List >
                            {a.map((text, index) => (
                                <ListItem style={{height: 35}} button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>




                <Divider />
                <List>
                    {['Install App'].map((text, index) => (
                        <ListItem style={{height: 35}} button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                </Box>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.root} />
            </main>
        </div>
    );
}
