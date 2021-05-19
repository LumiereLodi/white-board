import {makeStyles, useTheme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: 50,
        margin: 10,
        flexGrow: 1,
        padding : theme.spacing(2)


    },
    media: {
        height: 140,
    }

}));


export default  useStyles;