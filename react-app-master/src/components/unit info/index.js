

import React, { Fragment, useState, useEffect } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import useStyles from "../unit info/style";
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Container,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CardActionArea
} from "@material-ui/core";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {
    TableRow,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Whiteboard from "../whiteboard";



function App(props){

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };








    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>

                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Router>
            {/* export default function CenteredGrid() {
        const classes = useStyles(); */}

            <div className={classes.root}>
                <Grid container className={classes.rootContainer} justify="center">
                    <Grid container justify="center">

                        <Grid item>
                            <CardActionArea>
                                <Link to = "/Online Class" className={classes.link}>
                                    <Paper className={classes.paper + " " + classes.paperColor2} >
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Online Class
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            <CardActionArea>
                                <Link to = "/Week 1" className={classes.link} >

                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" onClick={showInfo} noWrap>
                                            Week 1
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            {/* //wk4 */}
                            <CardActionArea>
                                <Link to = "/Week 4" className={classes.link}>
                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Week 4
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            <CardActionArea>
                                <Link to = "/Week 7" className={classes.link}>
                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Week 7
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            <CardActionArea>
                                <Link to = "/Week 10" className={classes.link}>
                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Week 10
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            <CardActionArea>
                                <Link to = "/PreparationWeek" className={classes.link}>
                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Preparation <br></br>
                                            Week
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>
                        </Grid>

                        <Grid item>
                            <CardActionArea>
                                <Link to = "/Assessment" className={classes.link}>
                                    <Paper className={classes.paper + " " + classes.paperColor2}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Assessment
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            <CardActionArea>
                                <Link to = "/Week 2" className={classes.link}>
                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Week 2
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            <CardActionArea>
                                <Link to = "/Week 5" className={classes.link}>
                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Week 5
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            <CardActionArea>
                                <Link to = "/Week 8" className={classes.link}>
                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Week 8
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            <CardActionArea>
                                <Link to = "/Week 11" className={classes.link}>
                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Week 11
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            <CardActionArea>
                                <Link to = "/Preparation Week" className={classes.link}>
                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Preparation <br></br>Week
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>
                        </Grid>


                        <Grid item>
                            <CardActionArea>
                                <Link to = "/Forums" className={classes.link}>
                                    <Paper className={classes.paper + " " + classes.paperColor2}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Forums
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            <CardActionArea>
                                <Link to = "/Week 3" className={classes.link}>
                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Week 3
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            <CardActionArea>
                                <Link to = "/Week 6" className={classes.link}>
                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Week 6
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            <CardActionArea>
                                <Link to = "/Week 9" className={classes.link}>
                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Week 9
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            <CardActionArea>
                                <Link to = "/Week 12" className={classes.link}>
                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Week 12
                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                            <CardActionArea>
                                <Link to = "/Exam " className={classes.link}>
                                    <Paper className={classes.paper2 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5" noWrap>
                                            Exam
                                        </Typography>

                                    </Paper>
                                </Link>
                            </CardActionArea>
                        </Grid>

                        <Grid item>
                            <CardActionArea>
                                <Link to = "/Content" className={classes.link}>
                                    <Paper className={classes.paper3 + " " + classes.paperColor1}>
                                        <Typography className={classes.title} variant="h5"  noWrap>
                                            Content

                                        </Typography>
                                    </Paper>
                                </Link>
                            </CardActionArea>

                        </Grid>
                    </Grid>
                </Grid>
            </div>

            {/* ---      --    -----------------details------------ */}


        </Router>
    );
}

function showInfo(){
    <Typography variant="h8"> Hey Hi</Typography>
}


export default App;