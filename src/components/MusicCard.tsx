import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Fab,
    Fade,
    PopperPlacementType
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, {useState, useEffect} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddIcon from '@material-ui/icons/Add';
import SimplePopover from "./SimplePopover";
import Popover from 'material-ui-popup-state/HoverPopover'
import Popper from '@material-ui/core/Popper'
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state'

import {
    usePopupState,
    bindHover,
    bindPopover,
} from 'material-ui-popup-state/hooks'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            background: "#f1f1f1",

        },
        popover: {
            pointerEvents: 'none',
        },
        paper: {
            padding: theme.spacing(1),
        },
        typography: {
            padding: theme.spacing(1),
        },
        popper: {
            marginLeft: -100,
        }
    }),
);


export default function MusicCard() {
    const classes = useStyles();
    const popupState = usePopupState({ variant: 'popper', popupId: 'demoPopper' })
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<PopperPlacementType>();

    return (
        <React.Fragment>
            <Grid item xs={1}>
                <Card className={classes.root} {...bindHover(popupState)}>

                    <CardActionArea>
                        <Popper     placement="right"
                                    {...bindPopper(popupState)} transition className={classes.popper}>

                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Paper>
                                        <Button onClick={() => { alert('clicked') }}>P</Button>
                                    </Paper>
                                </Fade>
                            )}
                        </Popper>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h6">
                                Lizard2
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p" style={{marginTop: -9}}>
                                test
                            </Typography>

                        </CardContent>
                        <CardActions>


                        </CardActions>

                    </CardActionArea>
                </Card>
            </Grid>

        </React.Fragment>

    );

}


