import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppBar2 from '../AppBar/index';
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
        email:"rassaki@gmail.com",
        phonenumber : "087654312",
        dateofbirth:"3 May 2018",
        sex :"Male"

    },
    {
        id:2,
        lecturername:"Rassaki",
        email:"rassaki@gmail.com",
        phonenumber : "087654312",
        dateofbirth:"3 May 2018",
        sex :"Male"

    },
]
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <StyledTableRow key={row.lecturername}>
                                <StyledTableCell component="th" scope="row">
                                    {row.lecturername}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.email}</StyledTableCell>
                                <StyledTableCell align="right">{row.phonenumber}</StyledTableCell>
                                <StyledTableCell align="right">{row.dateofbirth}</StyledTableCell>
                                <StyledTableCell align="right">{row.sex}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}