import { fade, makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  card: {
    maxWidth: 90
  },
  media: {
    objectFit: "cover"
  },

  table: {
    minWidth: 200
  },

  link: {
    textDecoration: "none",
    color: theme.palette.text.primary
  },

  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    "& > *": {
      margin: theme.spacing(1)
    },
    flexGrow: 1
  },
  rootContainer: {
    marginTop: 50
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    justifyContent: "center",
    color: "#fff",
    width: theme.spacing(40),
    height: theme.spacing(10),
    margin: 10
  },
  paper2: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(3),
    justifyContent: "center",
    color: "#000000",
    width: theme.spacing(40),
    height: theme.spacing(10),
    margin: 10
  },
  paper3: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(10),
    justifyContent: "right",
    color: "#00000",
    width: theme.spacing(40),
    height: theme.spacing(50),
    margin: 10
  },

  paperColor1: {
    background: "#FFFFFF"
  },
  paperColor2: {
    background: "#091477"
  },

  paperColor3: {
    background: "#800080"
  },

  paperActionArea: {
    disableRipple: true,
    "&:hover $focusHighlight": {
      opacity: 1
    }
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default useStyles;
