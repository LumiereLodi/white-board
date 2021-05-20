//login
import  React, {useState} from 'react'
import {Grid, Paper, TextField, Typography, Button, Avatar, Link, AppBar} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { toast } from "react-toastify";
import NavBar from "../AppBar/whiteboardNav'"


const Login= ({setAuth}) => {
    const paperStyle = {padding :20, height : '70vh', width:300, margin: '0px auto'}
    const avatarStyle = {backgroundColor:'#091477'}
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const onSubmitForm = async e =>{
        e.preventDefault();

        try{

            console.log("in try block");
            const body= { email,password};
            const response =await fetch("http://localhost:3001/login",
                {
                    method :"POST",
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify(body)

                }

            );
            const parseRes = await response.json();
            // localStorage.setItem("token", parseRes.token);
            // setAuth(true);
            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                setAuth(true);
                toast.success("Logged in Successfully");
            } else {
                setAuth(false);
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
            <NavBar/>
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label="Email" name="email" type="email"  fullWidth required value={email}
                           onChange={e=>setUsername(e.target.value)} />
                <TextField label="Password" name="password" type='password' fullWidth required  value={password}  onChange={e=>setPassword(e.target.value)}/>

                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button style={{ margin: "10px 0", backgroundColor:'#091477', color:'white'}} onClick={(e) => { onSubmitForm(e) }} fullWidth >Sign in</Button>
                <Typography >
                    <Link href="#" >Forgot password ?</Link>
                </Typography>
                <Typography >
                    <Link href="#" >IT help desk </Link>
                </Typography>
                <Typography >
                    <Link href="/register" >Register</Link>
                </Typography>
            </Paper>
        </Grid>
        </div>

    )
}

export default Login