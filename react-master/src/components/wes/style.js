import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    rootContainer:{
        marginTop: 100
    },
    root: {
        flexGrow: 1
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(0),
        justifyContent: 'center',
        color: "#fff",
        width: theme.spacing(50),
        height: theme.spacing(25),
        margin: 10

    },
    paperColor1:{
        background: "#7C49AF",
    },
    paperColor2:{
        background: "#091477"
    },
    paperActionArea:{
        disableRipple: true,
        "&:hover $focusHighlight": {
            opacity: 1
        }
    }


}));

export default  useStyles;