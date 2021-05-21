import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    rootContainer:{
        marginTop: 5
    },
    saveButton:{
        marginTop: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:"flex-end"


    },
    alignment:{
        flexGrow: 6

    },
    root: {
        flexGrow: 1
    },
    paperGroup1: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(0),
        color: "#fff",
        width: theme.spacing(35),
        height: theme.spacing(47),
        margin: 10,
        background: "#ffffff",

    },
    paper2: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(0),
        color: "#fff",
        width: theme.spacing(100),
        height: theme.spacing(97),
        margin: 10,
        background: "#ffffff",
    },
    unitList:{
        paddingLeft: "10px",
        paddingTop: "5px",
        flexGrow:1,
        width: "100%",
        height: theme.spacing(10),
        display: 'flex',
        flexDirection: 'row',


    },
    unitListDiv:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop:"5px",

    },
    unitEnrolled:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:"flex-end"
    },
    unitEnrolledBtn:{
        marginTop:"5px",
        marginRight:"20px"
    },
    AppBarMain:{
        backgroundColor: "transparent",
        boxShadow: "0px 0px 0px 0px"
    },
    AppBar:{
        backgroundColor: "#144896",
        boxShadow: "0px 0px 0px 0px"
    },
    paperActionArea:{
        disableRipple: true,
        "&:hover $focusHighlight": {
            opacity: 1
        }
    },
    title:{
        color: "#000000"
    },
    toolbar:{
        justify:"center"
    }


}));

export default  useStyles;