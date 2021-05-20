import React from 'react';
import { Grid, Typography} from "@material-ui/core";
import useStyles from './styles'

export default function TimeGrid(){
    const classes=useStyles();
    //InputProps={{readOnly:true}}
    return(
        <div>
            <Grid container justify={'center'}>
                <Grid container justify={'left'}>
                    <Grid item>
                        <Typography id={'Day Field'} className={classes.paperDay}> Monday</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.paperUnit} id={'Unit Name'}>FZA3077 Computer Network</Typography>
                    </Grid>
                    <Grid item >
                        <Typography className={classes.paperlecturer} id={'Lecturer Name'}> Rassaki </Typography>
                        <Typography  id={'Unit/location'}>Building A</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};