import {
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "921px",
        margin: 0,
        paddingTop: "115px",
        fontFamily: "sans-serif",
        background: "#dfdfdf",
    },
    item: {
        textAlign: 'left'
    }
}));

export default useStyles;