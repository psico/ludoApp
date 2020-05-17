import React, {useState, useContext} from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import {AuthContext} from "../App";
import firebase from "../firebase";
import {withRouter} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoginGoogle from "../LoginGoogle";
import LoginFacebook from "../LoginFacebook";
import LoginTwitter from "../LoginTwitter";

const Login = ({history}) => {
    const componentClasses = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");
    const { t } = useTranslation();

    const Auth = useContext(AuthContext);

    const handleForm = e => {
        e.preventDefault();

        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
                    .then(res => {
                        console.log(res.user);
                        if (res.user) {
                            // Auth.setLoggedIn(true);
                            Auth.setAuth(res.user);
                            history.push('/community');
                        }
                    })
                    .catch(e => {
                        setErrors(e.message);
                    });
            });
    };

    return (
        <Grid container spacing={0} className={componentClasses.root}>
            <form onSubmit={e => handleForm(e)}>
                <h1>{t('login')}</h1>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                    <LoginFacebook/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                    <LoginTwitter/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                    <LoginGoogle/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <hr/>
                    <h3>{t('email-login')}</h3>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        placeholder="email"
                    />
                    <input
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        value={password}
                        type="password"
                        placeholder="password"
                    />

                    <Button variant="contained" color="primary" type="submit">{t('login')}</Button>
                    <Button variant="contained" color="primary" type="button" onClick={(e)=>{
                        e.preventDefault();
                        history.push('/join');
                    }}>{t('join')}</Button>
                </Grid>
                <span>{error}</span>
            </form>
        </Grid>
    );
};

export default withRouter(Login);
