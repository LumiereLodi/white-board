//login
import  React, {useState} from 'react'
import {Grid, Paper, TextField, Typography, Button, Avatar, Link, AppBar} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { toast } from "react-toastify";
// import NavBar from "../AppBar/whiteboardNav'"
import useStyles from './style';
import {useObserver} from "mobx-react"
import {useAppState} from "../WithStore"


const Login= () => {
    // const paperStyle = {padding :20, height : '70vh', width:300, margin: '0px auto'};
    // const avatarStyle = {backgroundColor:'#091477'};
    const classes = useStyles();
    const appState = useAppState();

    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const onSubmitForm = async e =>{
        e.preventDefault();

        try{

            const body= { email,password};
            const response =await fetch("http://localhost:3000/login",
                {
                    method :"POST",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify(body)

                }

            );
            console.log(response)
            // if(response.status === 401){
            //     console.alert("Incorrect email or password")
            // }
            const parseRes = await response.json();
            // localStorage.setItem("token", parseRes.token);
            // setAuth(true);
            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                appState.setAuth(true)
                toast.success("Logged in Successfully");
            } else {
                toast.error(parseRes);
            }
            console.log(parseRes);
            console.log("last try block")
        }
        catch (e){
            console.log(e)
        }
        console.log("exit")
    }

    return (
        <div>
            {/*<NavBar/>*/}
            <Grid style={{marginTop:"80px"}}>
                <Paper elevation={10} className={classes.paperStyle} >
                    <Grid align='center'>
                        <Avatar className={classes.avatar}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField label="Email" name="email" type="email"  fullWidth required value={email}
                               onChange={e=>setUsername(e.target.value)} />
                    <TextField label="Password" name="password" type='password' fullWidth required  value={password}  onChange={e=>setPassword(e.target.value)}/>

                    <FormControlLabel
                        justify="flex-start"
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <Typography >
                        <Link href="/Registration" >Admin</Link>
                    </Typography>
                    <Button style={{ margin: "25px 0", backgroundColor:'#144896', color:'white'}} onClick={(e) => { onSubmitForm(e) }} fullWidth >Sign in</Button>
                </Paper>
            </Grid>
        </div>

    )
}

export default Login