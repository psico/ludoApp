import {
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: 0,
        padding: 0,
        fontFamily: "sans-serif",
        background: "#dfdfdf",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    footer: {
        position: "fixed",
        width: "100%",
        bottom: 0,
        backgroundColor: "#3f51b5"
    }
}));

export default useStyles;
