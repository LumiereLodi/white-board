import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';
import Typography from "@material-ui/core/Typography";
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardActionArea from "@material-ui/core/CardActionArea";
export default function WesDashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
           <Grid container className = {classes.rootContainer} justify="center">
               <Grid container justify="center">
                   <Grid item >
                       <CardActionArea>
                           <Paper className={classes.paper + " " + classes.paperColor1} >
                               <Typography className={classes.title} variant="h4" noWrap>
                                   Unofficial academic <br/> record
                               </Typography>
                           </Paper>
                       </CardActionArea>

                   </Grid>
                   <Grid item>
                       <CardActionArea >
                       <Paper className={classes.paper+ " " + classes.paperColor2}>
                           <Typography className={classes.title} variant="h4" noWrap>
                               Personal profile
                           </Typography>
                       </Paper>
                       </CardActionArea>
                   </Grid>
               </Grid>
               <Grid container justify="center" >
                   <Grid item >
                       <CardActionArea >
                       <Paper className={classes.paper+ " " + classes.paperColor2}>
                           <Typography className={classes.title} variant="h4" noWrap>
                               Allocate+
                           </Typography>
                       </Paper>
                       </CardActionArea>
                   </Grid>
                   <Grid item>
                       <CardActionArea >
                       <Paper className={classes.paper+ " " + classes.paperColor1}>
                           <Typography className={classes.title} variant="h4" noWrap>
                               Exam Timetable
                           </Typography>
                       </Paper>
                       </CardActionArea>
                   </Grid>
               </Grid>
           </Grid>

        </div>
    );
};
