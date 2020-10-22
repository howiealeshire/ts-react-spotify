import {Card, CardActionArea, CardActions, CardContent, CardMedia, Link} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, {useEffect, useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MusicCard from './MusicCard'



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            background: "#f1f1f1",

        },
    }),
);




export default function FetchSpotifyData() {
    const classes = useStyles();
    const [isShown, setIsShown] = useState(false);
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    //const Spotify = require('spotify-web-api-js');
   // const s = new Spotify();
    //s.setAccessToken('1c9865ce985144d6866fd053189d53d8');

    useEffect(() => {
        // Get the hash of the url
        const hash = window.location.hash
            .substring(1)
            .split('&')
            .reduce(function (initial, item) {
                if (item) {
                    var parts = item.split('=');
                    // @ts-ignore
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                }
                return initial;
            }, {
                access_token: undefined
            });
        window.location.hash = '';

// Set token
        let _token = hash.access_token;

        const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
        const clientId = 'aa50c9ea4c8245b9836168bd179ebf14';
        const redirectUri = 'http://localhost:3000/';
        const scopes = [
            'user-top-read',
        ];

// If there is no token, redirect to Spotify authorization
        if (!_token) {
            // @ts-ignore
            window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
        }   }, []);
    return (
        <React.Fragment>

        </React.Fragment>

    );
}