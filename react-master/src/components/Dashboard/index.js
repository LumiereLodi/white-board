
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Typography from "@material-ui/core/Typography";
import TimeGrid from "./TimeGrid"
import styles from "./styles";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Paper, Card, Link} from "@material-ui/core";
import AppBar from '../AppBar/index'

const Dashboard = ({setAuth}) => {
    const [name, setName] = useState("");
    const [id,setID] = useState("");
    const getProfile = async () => {
        try {
            const res = await fetch("http://localhost:3001/dashboard/", {
                method: "GET",
                headers: { token: localStorage.token }
            });

            const parseData = await res.json();
            setName(parseData.librarianname || parseData.studentname || parseData.lecturername || parseData.adminname   );
            setID(parseData.librarianid || parseData.studentid || parseData.lecturerid || parseData.adminid   );
            console.log(parseData);
        } catch (err) {
            console.error(err.message);
        }
    };
    const logout = async e => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
        toast.success("Logout successfully");

    };



    useEffect(() => {
        getProfile();
    }, []);

    const classes=styles();
    return (
        <div>
            <AppBar/>
            <div>
                <h2 onClick={e => logout(e)}>Welcome  {name}</h2>
            </div>

            {/*<button onClick={e => logout(e)}>*/}
            {/*    Logout*/}
            {/*</button>*/}
            <Grid container className={classes.rootContainer} justify={'center'}>
                <Grid container justify={'center'}>
                    <Grid item>
                        <Card className={classes.card}>
                            <Paper className={classes.paper2+" "+classes.paperColor1} >
                                <Typography className={classes.title} variant={'h4'} noWrap align={'center'}>
                                    Timetable
                                </Typography>
                            </Paper>
                            <TimeGrid/>
                            <TimeGrid/>
                            <TimeGrid/>
                            <TimeGrid/>
                            <TimeGrid/>
                        </Card>
                    </Grid>
                    <Grid item>
                        <CardActionArea>
                            <Link href="/whiteboard" >
                                <Paper className={classes.paper+" "+classes.paperColor2} >
                                    <Typography className={classes.title} variant={'h4'} noWrap align={'center'}>
                                        Whiteboard  <DashboardIcon/>
                                    </Typography>
                                </Paper>
                            </Link>
                        </CardActionArea>
                        <CardActionArea>
                            <Link href="/wes">
                                <Paper className={classes.paper+" "+classes.paperColor2} >
                                    <Typography className={classes.title} variant={'h4'} noWrap align={'center'}>
                                        WES <PersonOutlineIcon/>
                                    </Typography>
                                </Paper>
                            </Link>
                        </CardActionArea>
                        <CardActionArea>
                            <Link href="/Books">
                                <Paper className={classes.paper+" "+classes.paperColor2}>
                                    <Typography className={classes.title} variant={'h4'} noWrap align={'center'}>
                                        Library <LocalLibraryIcon/>
                                    </Typography>
                                </Paper>
                            </Link>
                        </CardActionArea>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard