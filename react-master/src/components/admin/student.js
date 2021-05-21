import React,{useState,useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { TextField, Typography, Button, Avatar, Link, AppBar} from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import AppBar2 from '../AppBar/index';
import { toast } from "react-toastify";


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);
//
// const data = [
//     {
//         id:1,
//         lecturername:"Rassaki",
//         email:"rassaki@gmail.com",
//         phonenumber : "087654312",
//         dateofbirth:"3 May 2018",
//         sex :"Male"
//
//     },
//     {
//         id:2,
//         lecturername:"Rassaki",
//         email:"rassaki@gmail.com",
//         phonenumber : "087654312",
//         dateofbirth:"3 May 2018",
//         sex :"Male"
//
//     },
// ]
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const [students, setStudents] = useState([])

    const getStudents = async () => {
        try{
            const response = await fetch("http://localhost:3001/student-user")
            const jsonData = await response.json()
            setStudents(jsonData)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    useEffect(()=>{
        getStudents();
    },[])


    const classes = useStyles();

    return (
        <div>
            <AppBar2/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Full Name</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="right">Contact Number</StyledTableCell>
                            <StyledTableCell align="right">Date of Birth</StyledTableCell>
                            <StyledTableCell align="right">Sex</StyledTableCell>
                            <StyledTableCell align="right">Academic Year</StyledTableCell>
                            {/*<StyledTableCell align="right">Address</StyledTableCell>*/}
                            <StyledTableCell align="right">Citizenship</StyledTableCell>
                            <StyledTableCell align="right">Course Start Date</StyledTableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((row) => (
                            <StyledTableRow key={row.studentname}>
                                <StyledTableCell component="th" scope="row">
                                    {row.studentname}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.email}</StyledTableCell>
                                <StyledTableCell align="right">{row.phonenumber}</StyledTableCell>
                                <StyledTableCell align="right">{row.dateofbirth}</StyledTableCell>
                                <StyledTableCell align="right">{row.sex}</StyledTableCell>
                                <StyledTableCell align="right">{row.academicyear}</StyledTableCell>
                                {/*<StyledTableCell align="right">{row.residentialaddress}</StyledTableCell>*/}
                                <StyledTableCell align="right">{row.citizenship}</StyledTableCell>
                                <StyledTableCell align="right">{row.startingdate}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                <Link href="/student-user" >
                    <Button style={{ margin: "10px 0", backgroundColor:'#091477', color:'white'}}  fullWidth >Add Student</Button>
                </Link>
            </TableContainer>
        </div>
    );
}