import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppBar2 from '../AppBar/index';
import {Button, Typography} from "@material-ui/core";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
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

const data = [
    {
        id:1,
        lecturername:"Rassaki",
        email:"rassaki@gmail.com"

    },
    {
        id:2,
        lecturername:"Rassaki",
        email:"rassaki@gmail.com"

    },
]
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});



export default function CustomizedTables({setAuth}) {
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <StyledTableRow key={row.lecturername}>
                                <StyledTableCell component="th" scope="row">
                                    {row.lecturername}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.email}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link style={{ margin: "10px 0", backgroundColor:'#091477', color:'white' }} to="/register" fullWidth >Add User</Link>
        </div>
    );
}