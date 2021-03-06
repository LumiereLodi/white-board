import React, { Fragment, useState } from "react";
import {BrowserRouter, Link, Redirect, Router} from "react-router-dom";
import { toast } from "react-toastify";
import {Avatar, Button, Grid, Paper, TextField, Typography} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from './style';
import {useObserver} from "mobx-react"
import {useAppState} from "../WithStore"

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


const Register = ({ setAuth }) => {
    const appState = useAppState();
    // const paperStyle = {padding :20, height : '70vh', width:300, margin: '0px auto'}
    // const avatarStyle = {backgroundColor:'#091477'}
    const classes = useStyles();
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [name, setStudentName] = useState("");
    const [profession, setProfession] = useState("");



    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { email, password, name, profession, password2 };
            const response = await fetch(
                "http://localhost:3000/login",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );
            const parseRes = await response.json();
            // console.log(parseRes);
            // localStorage.setItem("token", parseRes.token);
            // setAuth(true);

            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                appState.setAuth(true)
                toast.success("Register Successfully");
            } else {
                toast.error(parseRes);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Grid>
            <Paper elevation={10} className={classes.paperStyle} >
                <Grid align='center'>
                    <Avatar className={classes.avatar}><LockOutlinedIcon/></Avatar>
                    <h2>Admin Login</h2>
                </Grid>

                <TextField label="Email" name="email" type="email" fullWidth required value={email}
                           onChange={e=>setUsername(e.target.value)} />
                <TextField label="Password"  name="password" type='password' fullWidth required  value={password}  onChange={e=>setPassword(e.target.value)}/>
                <TextField label="Confirm Password" name="password2" type='password' fullWidth required  value={password2}  onChange={e=>setPassword2(e.target.value)}/>

                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button style={{ margin: "10px 0", backgroundColor:'#144896', color:'white' }} onClick={(e) => { onSubmitForm(e) }} fullWidth >Login</Button>
                <Typography >


                </Typography>
            </Paper>
        </Grid>

    );
};

export default Register;
