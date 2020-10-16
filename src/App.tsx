import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar'
import CenteredGrid from "./components/CenteredGrid";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Button from '@material-ui/core/Button';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import {green} from "@material-ui/core/colors";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import PermanentDrawerLeft from "./components/PermanentDrawerLeft";
const SpotifyApiContext = require('react-spotify-api');


let theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});
theme = responsiveFontSizes(theme);


function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <div>
                <ThemeProvider theme={theme}>
                    <NavBar />


                    <PermanentDrawerLeft/>

                </ThemeProvider>


            </div>

        </React.Fragment>

    );
}

export default App;
