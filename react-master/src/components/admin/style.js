import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles((theme)=>({
    rootContainer:{
        marginTop:100,
        marginBottom:20
    },
    root:{
        flexGrow:1
    },
    paper:{
        display:'flex',
        flexDirection:'column',
        padding: theme.spacing(0),
        justifyContent:'center',
        color:"#fff",
        width:theme.spacing(50),
        height:theme.spacing(25),
        margin:10
    },
    paper2:{
        display:'flex',
        flexDirection:'column',
        padding: theme.spacing(0),
        justifyContent:'center',
        color:"#fff",
        width:theme.spacing(117),
        height:theme.spacing(15),
        margin:10
    },
    paperDay:{
        padding: theme.spacing(0),
        justifyContent:'center',
        width:theme.spacing(20),
        height:theme.spacing(2),
        marginLeft:60,
        marginTop:38
    },
    paperUnit:{
        padding: theme.spacing(0),
        justifyContent:'center',
        width:theme.spacing(30),
        height:theme.spacing(2),
        marginRight:260,
        marginTop:38
    },
    paperlecturer:{
        padding: theme.spacing(0),
        justifyContent:'center',
        width:theme.spacing(30),
        height:theme.spacing(2),
        marginBottom:20,
        marginTop:38
    },
    paperColor1:{
        background:'#7C49AF'
    },
    paperColor2:{
        background:'#091477'
    },
    paperActionArea:{
        disableRipple:true,
        '&:hover $focusHighlight':{
            opacity:1
        }
    },
    title:{
        display:'none',
        [theme.breakpoints.up('sm')]:{
            display:'block'
        }
    },
    card:{
        //expand the cards width
        width:theme.spacing(120),
        height:650,
        padding: theme.spacing(0),
    },
    image:{
        width:theme.spacing(10),
        height:50
    }
}));
export default useStyles;