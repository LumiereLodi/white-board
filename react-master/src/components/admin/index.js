import React from 'react';
import stylesCss from "./style";
import {CardActionArea, Grid, Paper, Typography,Link} from "@material-ui/core";


export function AdminUI({setAuth}){
    const classes=stylesCss();
    return(
        <div className={classes.root}>
            <div className={classes.rootContainer}>
                <Grid container className={classes.rootContainer} justify={'center'}>
                    <Grid container justify={'center'} >
                        <Grid item >
                            <CardActionArea>
                                <Link href={"/student"}>
                                    <Paper className={classes.paper+" "+classes.paperColor2}>
                                        <Typography className={classes.title} variant={'h4'} noWrap align={'center'}>
                                            Student
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>
                        </Grid>
                        <Grid item>
                            <CardActionArea>
                                <Link href={"/librarian"}>
                                    <Paper className={classes.paper+" "+classes.paperColor1}>
                                        <Typography className={classes.title} variant={'h4'} noWrap align={'center'}>
                                            Librarian
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>
                        </Grid>
                    </Grid>
                    <Grid container justify={'center'} >
                        <Grid item>
                            <CardActionArea>
                                <Link href={"/lecturer"}>
                                    <Paper className={classes.paper+" "+classes.paperColor1}>
                                        <Typography className={classes.title} variant={'h4'} noWrap align={'center'}>
                                            Lecturer
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>
                        </Grid>
                        <Grid item>
                            <CardActionArea>
                                <Link href={"/Unit"}>
                                    <Paper className={classes.paper+" "+classes.paperColor2}>
                                        <Typography className={classes.title} variant={'h4'} noWrap align={'center'}>
                                            Unit
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
export default AdminUI