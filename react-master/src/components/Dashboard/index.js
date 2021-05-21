
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Typography from "@material-ui/core/Typography";
import TimeGrid from "./TimeGrid"
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import {Paper, Card, Link} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import axios from "axios";
import {useObserver} from "mobx-react"
import {useAppState} from "../WithStore"


const Dashboard = ({setAuth}) => {
    const classes = useStyles()
    const appState = useAppState();

    const [name, setName] = useState("");
    const [id,setID] = useState("");
    const logout = async e => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
        toast.success("Logout successfully");

    };



    useEffect(() => {
        const getProfile = async () => {

            try{
                const res = await fetch("http://localhost:3001/dashboard/", {
                    method: "GET",
                    headers: { token: localStorage.token }
                });

                const parseData = await res.json();
                setName(parseData.librarianname || parseData.studentname || parseData.lecturername || parseData.adminname   );
                setID(parseData.librarianid || parseData.studentid || parseData.lecturerid || parseData.adminid   );
                console.log(parseData);
                
            }catch (e) {
                console.log(e)
            }


            try{


                const response = await axios.get(`http://localhost:3000/timetable/2850/1`);
                appState.getStudentSemesterUnit(response.data.data.studentTimeTable)
                console.log(response.data.data.studentTimeTable)
            }catch (err) {
                console.log(err)
            }
        };
        getProfile();
    }, []);

    return useObserver(()=>(
        <div>
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

                                    <Toolbar>
                                        <div className={classes.root}/>
                                        <Typography className={classes.title} variant={'h4'} noWrap align={'center'}>
                                            Timetable
                                        </Typography>
                                        <div className={classes.root}/>
                                    </Toolbar>

                            </Paper>
                            {appState.studentSemesterUnit.map((unit) => {
                                return(<Grid container justify={'center'}>
                                    <Grid container justify={'left'}>
                                        <Grid item>
                                            <Typography id={'Day Field'} className={classes.paperDay}> {unit.classday}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography className={classes.paperUnit} id={'Unit Name'}>{unit.unitcode} {unit.unitname}</Typography>
                                        </Grid>
                                        <Grid item >
                                            <Typography className={classes.paperlecturer} id={'Lecturer Name'}> {unit.lecturergivenname} </Typography>
                                            <Typography  id={'Unit/location'}>{unit.venue}</Typography>
                                        </Grid>
                                    </Grid>
                                    <hr style={{
                                        height: 0.5,
                                        width:"100%"
                                    }}/>
                                </Grid>)

                            })}
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
                            <Link href="/AllocatePlus">
                                <Paper className={classes.paper+" "+classes.paperColor2} >
                                    <Typography className={classes.title} variant={'h4'} noWrap align={'center'}>
                                        Allocate++ <PersonOutlineIcon/>
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
    ));
};

export default Dashboard