import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from "./style";



export default function Books(props) {
    const classes = useStyles();

    return (
<center>
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

