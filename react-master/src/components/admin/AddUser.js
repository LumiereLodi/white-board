
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

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { studentname, email,sex, academicYear, phonenumber,startingdate, residentialaddress, academicStatus,dateofbirth,citizenship };
            const response = await fetch("http://localhost:3001/student-user", {
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
                    <FormControl>
                        <RadioGroup row>
                            <FormControlLabel
                                label="First Year"
                                control={
                                    <input
                                        name="academicYear"
                                        component={Radio}
                                        type="radio"
                                        value="First Year"
                                        onChange={e => setStudentAcademicYear(e.target.value)}
                                    />
                                }
                            />
                            <FormControlLabel
                                label="Second Year"
                                control={
                                    <input
                                        name="academicYear"
                                        component={Radio}
                                        type="radio"
                                        value="Second Year"
                                        onChange={e => setStudentAcademicYear(e.target.value)}
                                    />
                                }
                            />
                            <FormControlLabel
                                label="Third year"
                                control={
                                    <input
                                        name="academicYear"
                                        component={Radio}
                                        type="radio"
                                        value="Third Year"
                                        onChange={e => setStudentAcademicYear(e.target.value)}
                                    />
                                }
                            />
                            <FormControlLabel
                                label="Fourth year"
                                control={
                                    <input
                                        name="academicYear"
                                        component={Radio}
                                        type="radio"
                                        value="Fourth Year"
                                        onChange={e => setStudentAcademicYear(e.target.value)}
                                    />
                                }
                            />
                            <FormControlLabel
                                label="Honours"
                                control={
                                    <input
                                        name="academicYear"
                                        component={Radio}
                                        type="radio"
                                        value="Honours"
                                        onChange={e => setStudentAcademicYear(e.target.value)}
                                    />
                                }
                            />
                        </RadioGroup>
                    </FormControl>
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


// Picker

// const useStyles = makeStyles((theme) => ({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: 200,
//     },
// }));
//
//
// const onSubmit2 = async values => {
//     const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
//     await sleep(300);
//     window.alert(JSON.stringify(values, 0, 2));
// };
// const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//         errors.firstName = 'Required';
//     }
//     if (!values.lastName) {
//         errors.lastName = 'Required';
//     }
//     if (!values.email) {
//         errors.email = 'Required';
//     }
//     return errors;
// };
//
// function AddUser() {
//     const [studentname, setStudentName] = useState("")
//     const [email, setStudentEmail] = useState("")
//     const [sex, setSex] = useState("")
//     const [academicYear,setStudentAcademicYear] = useState("")
//     const [phonenumber,setPhoneNumber] = useState("")
//     const [residentialaddress,setStudentAddress] = useState("")
//     const [academicStatus ,setAcademicStatus] = useState("")
//
//     const classes = useStyles();
//
//         const onSubmitForm = async e => {
//         e.preventDefault();
//         try {
//             const body = {studentname, email,sex, academicYear, phonenumber, residentialaddress, academicStatus};
//             const response = await fetch("http://localhost:3001/student-user", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(body)
//             });
//             const parseRes = await response.json();
//             // window.location = "/";
//         } catch (err) {
//             console.error(err.message);
//         }
//     };
//
//     return (
//         <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
//             <CssBaseline />
//             <Typography variant="h4" align="center" component="h1" gutterBottom>
//                 Add User Form
//             </Typography>
//
//
//             <Form
//                 onSubmit={onSubmitForm}
//                 initialValues={{ newStudent: false, sex: '' }}
//                 validate={validate}
//                 render={({ handleSubmit, reset, submitting, pristine, values }) => (
//                     <form onSubmit={onSubmitForm} noValidate>
//                         <Paper style={{ padding: 16 }}>
//                             <Grid container alignItems="flex-start" spacing={2}>
//                                 <Grid item xs={6}>
//                                     <Field
//                                         fullWidth
//                                         required
//                                         name="studentID"
//                                         component={TextField}
//                                         type="text"
//                                         label="Student ID"
//                                     />
//                                 </Grid>
//                                 <Grid item xs={6}>
//                                     <Field
//                                         fullWidth
//                                         required
//                                         name="studentname"
//                                         component={studentname}
//                                         type="text"
//                                         label="Full Name"
//                                         value={studentname}
//                                         onChange={e => setStudentName(e.target.value)}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <Field
//                                         name="email"
//                                         fullWidth
//                                         required
//                                         component={TextField}
//                                         type="email"
//                                         label="Email"
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <TextField2
//                                         id="date"
//                                         label="Date of Birth"
//                                         type="date"
//                                         defaultValue="1999-03-08"
//                                         className={classes.textField}
//                                         InputLabelProps={{
//                                             shrink: true,
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={6}>
//                                     <Field
//                                         fullWidth
//                                         required
//                                         name="phonenumber"
//                                         component={TextField}
//                                         type="text"
//                                         label="Phone Number"
//                                     />
//                                 </Grid>
//                                 <Grid item xs={6}>
//                                     <Field
//                                         fullWidth
//                                         required
//                                         name="citizenship"
//                                         component={TextField}
//                                         type="text"
//                                         label="Citizenship"
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <FormControlLabel
//                                         label="New Student"
//                                         control={
//                                             <Field
//                                                 name="newStudent"
//                                                 component={Checkbox}
//                                                 type="checkbox"
//                                             />
//                                         }
//                                     />
//                                 </Grid>
//                                 <Grid item>
//                                     <FormControl component="fieldset">
//                                         <FormLabel component="legend">Gender</FormLabel>
//                                         <RadioGroup row>
//                                             <FormControlLabel
//                                                 label="male"
//                                                 control={
//                                                     <Field
//                                                         name="sex"
//                                                         component={Radio}
//                                                         type="radio"
//                                                         value="m"
//                                                     />
//                                                 }
//                                             />
//                                             <FormControlLabel
//                                                 label="female"
//                                                 control={
//                                                     <Field
//                                                         name="sex"
//                                                         component={Radio}
//                                                         type="radio"
//                                                         value="f"
//                                                     />
//                                                 }
//                                             />
//                                             <FormControlLabel
//                                                 label="other"
//                                                 control={
//                                                     <Field
//                                                         name="sex"
//                                                         component={Radio}
//                                                         type="radio"
//                                                         value="o"
//                                                     />
//                                                 }
//                                             />
//                                         </RadioGroup>
//                                     </FormControl>
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <TextField2
//                                         id="date"
//                                         label="Starting Date"
//                                         type="date"
//                                         defaultValue="1999-03-08"
//                                         className={classes.textField}
//                                         InputLabelProps={{
//                                             shrink: true,
//                                         }}
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <Field
//                                         fullWidth
//                                         name="academicStatus"
//                                         component={TextField}
//                                         multiline
//                                         label="Academic Status"
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <Field
//                                         fullWidth
//                                         name="academicYear"
//                                         component={Select}
//                                         label="Academic Year"
//                                         formControlProps={{ fullWidth: true }}
//                                     >
//                                         <MenuItem value="First Year">First Year</MenuItem>
//                                         <MenuItem value="Second Year">Second Year</MenuItem>
//                                         <MenuItem value="Third Year">Third Year</MenuItem>
//                                         <MenuItem value="Fourth Year">Fourth Year</MenuItem>
//                                         <MenuItem value="Fifth Year">Fifth Year</MenuItem>
//                                         <MenuItem value="Honours">Honours</MenuItem>
//                                     </Field>
//                                 </Grid>
//                                 <Grid item xs={12}>
//                                     <Field
//                                         fullWidth
//                                         name="residentialaddress"
//                                         component={TextField}
//                                         multiline
//                                         label="Residential Address"
//                                     />
//                                 </Grid>
//                                 <Grid item xs={12}>
//
//                                 <Grid item style={{ marginTop: 16 }}>
//                                     <Button
//                                         variant="contained"
//                                         color="primary"
//                                         type="submit"
//                                         disabled={submitting}
//                                     >
//                                         Submit
//                                     </Button>
//                                 </Grid>
//                             </Grid>
//                             </Grid>
//                         </Paper>
//
//                         <pre>{JSON.stringify(values, 0, 2)}</pre>
//                     </form>
//                 )}
//             />
//         </div>
//     );
// }
//
// export default AddUser;


export default InputUser;