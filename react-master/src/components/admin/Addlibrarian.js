
import React, { Fragment, useState } from "react";
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import TextField2 from '@material-ui/core/TextField';
import AppBar from "../AppBar/index";

import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Paper,
    Link,
    Grid,
    Button,
    CssBaseline,
    RadioGroup,
    FormLabel,
    MenuItem,
    FormGroup,
    FormControl,
    FormControlLabel,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const InputUser = () => {

    const [librarianid, setID] = useState("")
    const [librarianname, setName] = useState("")
    const [email, setEmail] = useState("")
    const [sex, setSex] = useState("")
    const [phonenumber,setPhoneNumber] = useState("")
    const [residentialaddress,setAddress] = useState("")
    const [dateofbirth ,setdateofbirth] = useState("")


    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {librarianid, librarianname, email,sex, phonenumber, residentialaddress,dateofbirth };
            const response = await fetch("http://localhost:3001/librarian-user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/admin-librarian";
        } catch (err) {
            console.error(err.message);
        }
    };
    const classes = useStyles();

    return (
        <div>
            <AppBar/>
            <center>
                <h1 >Add Librarian Details</h1>
                <div>
                    <form style={{width: 800,height: 450, padding:5,fontSize:15}} onSubmit={onSubmitForm}>
                        <label>Librarian ID</label>
                        <br></br>
                        <br></br>
                        <input
                            required
                            type="text"
                            value={librarianid}
                            onChange={e => setID(e.target.value)}
                        />
                        <br></br>
                        <br></br>

                        <label>Full Name</label>
                        <br></br>
                        <br></br>
                        <input
                            required
                            type="text"
                            value={librarianname}
                            onChange={e => setName(e.target.value)}
                        />
                        <br></br>
                        <br></br>
                        <label>librarian Email</label>
                        <br></br>
                        <input
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <br></br>
                        <br></br>
                        <label>Date of Birth</label>
                        <br></br>
                        <TextField2
                            id="date"
                            type="date"
                            defaultValue="1999-03-08"
                            className={classes.textField}
                            value={dateofbirth}
                            onChange={e => setdateofbirth(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <br></br>
                        <br></br>

                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup row>
                                <FormControlLabel
                                    label="male"
                                    control={
                                        <input
                                            name="sex"
                                            component={Radio}
                                            type="radio"
                                            value="M"
                                            onChange={e => setSex(e.target.value)}
                                        />
                                    }
                                />
                                <FormControlLabel
                                    label="female"
                                    control={
                                        <input
                                            name="sex"
                                            component={Radio}
                                            type="radio"
                                            value="F"
                                            onChange={e => setSex(e.target.value)}
                                        />
                                    }
                                />
                                <FormControlLabel
                                    label="other"
                                    control={
                                        <input
                                            name="sex"
                                            component={Radio}
                                            type="radio"
                                            value="O"
                                            onChange={e => setSex(e.target.value)}
                                        />
                                    }
                                />
                            </RadioGroup>
                        </FormControl>
                        <br></br>
                        <br></br>
                        <label>Phone Number</label>
                        <br></br>
                        <input
                            type="text"
                            value={phonenumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />

                        <br></br>
                        <br></br>
                        <label>Residential Address</label>
                        <br></br>
                        <input
                            type="text"
                            value={residentialaddress}
                            onChange={e => setAddress(e.target.value)}
                        />
                        <br></br>
                        <br></br>

                        <button style={{width:100,height:50, color:"blue"}}>Add Student</button>
                    </form>
                </div>
            </center>
        </div>
    );
};




export default InputUser;