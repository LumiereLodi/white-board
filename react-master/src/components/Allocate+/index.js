import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';
import Typography from "@material-ui/core/Typography";
import AppBar from '@material-ui/core/AppBar';
import CardActionArea from "@material-ui/core/CardActionArea";
import Toolbar from "@material-ui/core/Toolbar";
import {useObserver} from "mobx-react"
import {useAppState} from "../WithStore"
import axios from "axios";
import SaveIcon from '@material-ui/icons/Save';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { DataGrid } from '@material-ui/data-grid';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Button from '@material-ui/core/Button';
import Checkbox from "@material-ui/core/Checkbox";



export default function AllocatePlus() {
    const classes = useStyles();
    const appState = useAppState();

    const saveInformation = async ()=>{
        try{
            const response = await axios.post('http://localhost:3000/');
        }catch (err) {
            console.log(err)
        }
    }
    const studentSelectedTimetable =(unit,event)=>{
        if(event.target.checked){
            appState.addSelectedTimetable(unit)
        }
    }
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: "transparent",
            color: "green"
        },
        body: {
            fontSize: 14
        }
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            "&:nth-of-type(odd)": {
                backgroundColor: theme.palette.action.hover
            }
        }
    }))(TableRow);

    const unitEnrolled = (unit)=>{
        appState.addUnitEnrolled(unit);
        appState.removeUnit(unit.unitcode)
    }
    const removeUnitEnrolled = (unit)=>{
        appState.removeEnrolledUnit(unit);
        appState.emptyUnitTimetable(unit)

    }

    const showTimetable = async (unit)=>{
        try{
            let response = await axios.get(`http://localhost:3000/onlineclass/${unit.unitcode}/${unit.semester}`);
            appState.setUnitTimetable(response.data.data.studentTimeTable)
        }catch (err) {
            console.log(err)
        }
    }
    useEffect( ()=>{

        const fetchData = async ()=>{
            try{
                const response = await axios.get("http://localhost:3000/availableunit/2850");
                let i;

                    appState.addAvailableUnit(response.data.data.newStudent);


            }catch (err) {
                console.log(err)
            }
        }
        fetchData();

    }, []);
    return useObserver(()=>(

            <div >
                <Grid xs={12}>
                <div >
                    <Grid className = {classes.saveButton} container item >
                        <div className={classes.alignment}/>
                        <Button
                            style={{backgroundColor:"#144896"}}

                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={<SaveIcon />}
                        >
                            Save
                        </Button>
                        <div className={classes.root}/>
                    </Grid>

                </div>

                <Grid container className = {classes.rootContainer} justify="left">

                    <Grid  item container  xs={4} sm={4} justify="flex-end" >
                        <Paper className={classes.paperGroup1 + " " + classes.paperColor1} variant="outlined">
                            <AppBar position="sticky" className={classes.AppBar} justify="center">
                                <Toolbar >
                                    <div className={classes.root}/>
                                    <div className={classes.toolbar}>
                                        <Typography variant="h5">
                                            Units Enrolled
                                        </Typography>
                                    </div>
                                    <div className={classes.root}/>

                                </Toolbar>
                            </AppBar>

                            <List style={{maxHeight: "100%", overflow: 'auto'}}>
                                {appState.unitEnrolled.map((unit) => {

                                    return (
                                        <div>

                                                <Paper style={{background: "#ffffff"}} className={classes.unitList} variant="outlined"  >
                                                    <div>
                                                        <div className={classes.unitListDiv}>
                                                            <Typography variant="caption">
                                                                {unit.unitcode}
                                                            </Typography>
                                                        </div>
                                                        <div className={classes.unitListDiv}  >
                                                            <Typography variant="caption" >
                                                                {unit.unitname}
                                                            </Typography>
                                                        </div>
                                                        <div className={classes.unitListDiv}>
                                                            <Typography variant="caption">
                                                                {unit.lecturersurname} {unit.lecturergivenname}
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                    <div className={classes.root}/>
                                                    <div className={classes.unitEnrolled}>
                                                        <Grid item  sm={6} xs={12}>
                                                            <Button onClick={()=>{showTimetable(unit)}} className={classes.unitEnrolledBtn}
                                                                    variant="outlined" size="small" style={{ color:"#144896"}}
                                                            >
                                                                View
                                                            </Button>
                                                            <Button onClick={()=>{removeUnitEnrolled(unit)}} className={classes.unitEnrolledBtn}
                                                                    variant="outlined" size="small" style={{color:"#144896"}}

                                                            >
                                                                Delete
                                                            </Button>
                                                        </Grid>

                                                    </div>

                                                </Paper>

                                            <hr style={{
                                                height: 0.5,
                                                width:"100%"
                                            }}/>

                                        </div>
                                    )
                                })}
                            </List>

                        </Paper>

                        <Paper className={classes.paperGroup1 + " " + classes.paperColor1} variant="outlined">
                            <AppBar position="sticky" className={classes.AppBar}>
                                <Toolbar>
                                    <div className={classes.root}/>
                                    <div className={classes.toolbar}>
                                        <Typography variant="h5">
                                            Available Units
                                        </Typography>
                                    </div>
                                    <div className={classes.root}/>
                                </Toolbar>
                            </AppBar>

                            <List style={{maxHeight: "100%", overflow: 'auto'}}>
                                {appState.availableUnit.map((unit) => {
                                    return (
                                        <div>
                                            <CardActionArea onClick={()=>{unitEnrolled(unit)}}  >
                                                <Paper style={{background: "#ffffff"}} className={classes.unitList} variant="outlined" >
                                                    <div>
                                                        <div className={classes.unitListDiv}>
                                                            <Typography variant="caption">
                                                                {unit.unitcode}
                                                            </Typography>
                                                        </div>
                                                        <div className={classes.unitListDiv}  >
                                                            <Typography variant="caption" >
                                                                {unit.unitname}
                                                            </Typography>
                                                        </div>
                                                        <div className={classes.unitListDiv}>
                                                            <Typography variant="caption">
                                                                {unit.lecturersurname} {unit.lecturergivenname}
                                                            </Typography>
                                                        </div>
                                                    </div>


                                                </Paper>
                                            </CardActionArea>
                                            <hr style={{
                                                height: 0.5,
                                                width:"100%"
                                            }}/>

                                        </div>
                                    )
                                })}
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item container direction=  "column" xs={4} sm={4} lg={6} >
                        <Grid item >
                            <Paper className={classes.paper2 + " " + classes.paperColor1} variant="outlined" >
                                <AppBar position="sticky" className={classes.AppBarMain}>
                                    <Toolbar>
                                        <div className={classes.root}/>
                                        <div className={classes.toolbar}>
                                            <Typography variant="h5" className={classes.title}>
                                                Select Timetable
                                            </Typography>
                                        </div>
                                        <div className={classes.root}/>
                                    </Toolbar>
                                </AppBar>

                                <Table aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="center" style={{color:"black"}}>UNIT CODE</StyledTableCell>
                                            <StyledTableCell align="center" style={{color:"black"}}>UNIT NAME</StyledTableCell>
                                            <StyledTableCell align="center" style={{color:"black"}}>DAY</StyledTableCell>
                                            <StyledTableCell align="center" style={{color:"black"}}>TIME</StyledTableCell>
                                            <StyledTableCell align="right"> </StyledTableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {appState.unitTimetable.map((unit) => (
                                            <StyledTableRow key={unit.index}  >

                                                <StyledTableCell align="center" >
                                                    {unit.unitcode}
                                                </StyledTableCell>
                                                <StyledTableCell align="center">{unit.unitname}</StyledTableCell>
                                                <StyledTableCell align="center">{unit.classday}</StyledTableCell>
                                                <StyledTableCell align="center">{unit.classtime}</StyledTableCell>
                                                {/*<StyledTableCell align="right">{row.protein}</StyledTableCell>*/}

                                                {/*<Button onClick={()=>{studentSelectedTimetable()}}*/}
                                                {/*        align="center"*/}
                                                {/*        variant="outlined" size="small" style={{color:selectedTimetable.color, marginTop:"10px", backgroundColor:selectedTimetable.backgroundColor}}*/}
                                                {/*>*/}
                                                {/*    {selectedTimetable.text}*/}
                                                {/*</Button>*/}
                                                <Checkbox
                                                    value={unit}
                                                    onChange={(event)=>{studentSelectedTimetable(unit,event)}}
                                                    style={{ marginTop:"4px"}}
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                />

                                            </StyledTableRow>

                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid>

                    </Grid>


                </Grid>

                </Grid>
            </div>
        )
    )
};
