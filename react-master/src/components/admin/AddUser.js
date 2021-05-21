
import React, { Fragment, useState } from "react";
import ReactDOM from 'react-dom';

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

    const [studentid, setStudentID] = useState("")
    const [studentname, setStudentName] = useState("")
    const [email, setStudentEmail] = useState("")
    const [sex, setSex] = useState("")
    const [academicYear,setStudentAcademicYear] = useState("")
    const [phonenumber,setPhoneNumber] = useState("")
    const [residentialaddress,setStudentAddress] = useState("")
    const [academicStatus ,setAcademicStatus] = useState("")
    const [dateofbirth ,setdateofbirth] = useState("")
    const [citizenship ,setcitizenship] = useState("")
    const [startingdate ,setstartingdate] = useState("")
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {studentid, studentname, email,sex, academicYear, phonenumber,startingdate, residentialaddress, academicStatus,dateofbirth,citizenship ,password,password2};
            const response = await fetch("http://localhost:3000/student-user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/admin-student";
        } catch (err) {
            console.error(err.message);
        }
    };
    const classes = useStyles();

    return (
        <div>
            <AppBar/>
            <center>
                <h1 >Add Student Details</h1>
                <div>
                    <form style={{width: 800,height: 450, padding:5,fontSize:15}} onSubmit={onSubmitForm}>
                        <label>Student ID</label>
                        <br></br>
                        <br></br>
                        <input
                            required
                            type="text"
                            value={studentid}
                            onChange={e => setStudentID(e.target.value)}
                        />
                        <br></br>
                        <br></br>

                        <label>Student Name</label>
                        <br></br>
                        <br></br>
                        <input
                            required
                            type="text"
                            value={studentname}
                            onChange={e => setStudentName(e.target.value)}
                        />
                        <br></br>
                        <br></br>
                        <label>Student Email</label>
                        <br></br>
                        <input
                            type="text"
                            value={email}
                            onChange={e => setStudentEmail(e.target.value)}
                        />
                        <br></br>
                        <br></br>
                        <label>Create Password</label>
                        <br></br>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <br></br>
                        <br></br>
                        <label>Confirm Password</label>
                        <br></br>
                        <input
                            type="password"
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}
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
                        <label>citizenship</label>
                        <br></br>
                        <input
                            type="text"
                            value={citizenship}
                            onChange={e => setcitizenship(e.target.value)}
                        />
                        <br></br>
                        <br></br>


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
                        <label>Academic Date</label>
                        <br></br>
                        <TextField2
                            id="date"
                            type="date"
                            defaultValue="1999-03-08"
                            className={classes.textField}
                            value={startingdate}
                            onChange={e => setstartingdate(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <br></br>
                        <br></br>
                        <label>Course</label>
                        <br></br>
                        <input
                            type="text"
                            value={academicStatus}
                            onChange={e => setAcademicStatus(e.target.value)}
                        />
                        <br></br>
                        <br></br>
                        <label>Academic Year</label>
                        <br></br>


                        <br></br>
                        <br></br>
                        <label>Residential Address</label>
                        <br></br>
                        <input
                            type="text"
                            value={residentialaddress}
                            onChange={e => setStudentAddress(e.target.value)}
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