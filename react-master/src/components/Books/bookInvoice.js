import React, {useEffect, useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Grid from '@material-ui/core/Grid';
import useStyles from "./style";
import bookData from "../../API BOOK";
import AppBar  from "../AppBar/index"
import {toast} from "react-toastify";


export default function Books(props, theme, setAuth) {
    const [booktitle, setTitle] = useState("");
    const getProfile = async () => {
        try {
            const res = await fetch("http://localhost:3001/books-invoice", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseData = await res.json();
            setTitle(parseData.booktitle);
            console.log(parseData);
        } catch (err) {
            console.error(err.message);
        }
    };


    useEffect(() => {
        getProfile();
    }, []);


    const classes = useStyles();


    return (

<center>
    <h2>Welcome  {booktitle}</h2>
    <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                className={classes.media}
                image={props.imgUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h3">
                    Author : {props.author}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="h3">
                    Price : R{props.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Quantity : {props.quantity}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Purchase
            </Button>
            <Button size="small" color="primary">
                Description
            </Button>
        </CardActions>
    </Card>

</center>

    );
}

