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

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const [librarian, setlibrarian] = useState([])

    const getlibrarian = async () => {
        try{
            const response = await fetch("http://localhost:3001/librarian-user")
            const jsonData = await response.json()
            setlibrarian(jsonData)
        }
        catch (e) {
            console.log(e.message)
        }
    }

    useEffect(()=>{
        getlibrarian();
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
                            <StyledTableCell align="center">librarian ID</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="right">Contact Number</StyledTableCell>
                            <StyledTableCell align="right">Date of Birth</StyledTableCell>
                            <StyledTableCell align="right">Sex</StyledTableCell>
                            {/*<StyledTableCell align="right">Address</StyledTableCell>*/}


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {librarian.map((row) => (
                            <StyledTableRow key={row.librarianname}>
                                <StyledTableCell component="th" scope="row">
                                    {row.librarianname}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.librarianid}</StyledTableCell>
                                <StyledTableCell align="center">{row.email}</StyledTableCell>
                                <StyledTableCell align="right">{row.phonenumber}</StyledTableCell>
                                <StyledTableCell align="right">{row.dateofbirth}</StyledTableCell>
                                <StyledTableCell align="right">{row.sex}</StyledTableCell>
                                {/*<StyledTableCell align="right">{row.residentialaddress}</StyledTableCell>*/}

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                <Link href="/librarian-user" >
                    <Button style={{ margin: "10px 0", backgroundColor:'#091477', color:'white'}}  fullWidth >Add librarian</Button>
                </Link>
            </TableContainer>
        </div>
    );
}