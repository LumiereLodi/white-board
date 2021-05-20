import React from "react";
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
import useStyles from "./style";

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
import { Redirect } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Linkify from 'react-linkify';
import {
	TableRow,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";

function Whiteboard() {
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
			onClose={handleMenuClose}>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);
    
   // const history = useHistory();
    // const navigateTo = () => history.push('/App');//eg.history.push('/login');

	const mobileMenuId = "primary-search-account-menu-mobile";
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}>
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
					color="inherit">
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
								<Link to="/FIT1010" className={classes.link}>
									<Paper className={classes.paper + " " + classes.paperColor2} onClick={ 
                  <Redirect to="/src/App.js"/>}>
										<Typography className={classes.title} variant="h5" noWrap>
											FIT1010
											<br></br>
											Software Engineering
										</Typography>
									</Paper>
								</Link>
							</CardActionArea>

							<CardActionArea>
								<Link to="/FIT1022" className={classes.link}>
									<Paper className={classes.paper + " " + classes.paperColor3} >
										<Typography className={classes.title} variant="h5" noWrap>
											FIT1022
											<br></br>
											Computer Network
										</Typography>
									</Paper>
								</Link>
							</CardActionArea>
						</Grid>

						<Grid item>
							<CardActionArea>
								<Link to="/FIT2001" className={classes.link}>
									<Paper className={classes.paper + " " + classes.paperColor2}>
										<Typography className={classes.title} variant="h5" noWrap>
											FIT2001
											<br></br>
											Computer Networks
										</Typography>
									</Paper>
								</Link>
							</CardActionArea>

							<CardActionArea>
								<Link to="/FIT3165" className={classes.link}>
									<Paper className={classes.paper + " " + classes.paperColor3}>
										<Typography className={classes.title} variant="h5" noWrap>
											FIT3165
											<br></br>
											Software
										</Typography>
									</Paper>
								</Link>
							</CardActionArea>
						</Grid>

            
						<Grid item>
							<CardActionArea>
								
								<Paper className={classes.paper3 + " " + classes.paperColor1}>
									<div className={classes.grow}>
										<AppBar position="flex" style={{ background: "#144896" }}>
											<Toolbar>
												<Typography className={classes.title} variant="h6" noWrap>
													Upcoming Events
												</Typography>

											</Toolbar>
										</AppBar>
									</div>
                  <br></br>
                  <Typography className={classes.title} variant="h6" noWrap>
										1.     Quiz 1: 
                          <Linkify><Typography className={classes.title} variant="h8" noWrap>quiz.link </Typography></Linkify>
                       <br></br>
                    2.     Quiz 2: 
                          <Linkify><Typography className={classes.title} variant="h8" noWrap>quiz.link </Typography></Linkify>
                       <br></br>
                    3.     Quiz 3: 
                          <Linkify><Typography className={classes.title} variant="h8" noWrap>quiz.link </Typography></Linkify>
                       <br></br>
									</Typography>
								</Paper>
							</CardActionArea>
						</Grid> 
             
					</Grid>
				</Grid>
			</div>

  
		</Router>
    
	);
}

export default Whiteboard;
