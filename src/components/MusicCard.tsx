import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            background: "#f1f1f1",

        },
    }),
);


export default function CenteredGrid() {
    const classes = useStyles();
    const [isShown, setIsShown] = useState(false);

    return (
        <React.Fragment>

        <Card className={classes.root}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}>



            <CardActionArea>
                {isShown && (
                    <button>
                        I'll appear when you hover over the button.
                    </button>
                )}
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        Lizard
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" style={{ marginTop: -9 }}>
                        test
                    </Typography>

                </CardContent>
                <CardActions>



                </CardActions>

            </CardActionArea>
        </Card>
        </React.Fragment>

    );
}


