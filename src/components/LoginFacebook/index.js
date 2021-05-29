import React, {useState, useContext} from "react";
import Button from '@material-ui/core/Button';
import {AuthContext} from "../../App";
import firebase from "../../firebase";
import {withRouter} from 'react-router-dom'
import useStyles from "./css";
import {useTranslation} from "react-i18next";
import {loginCredential} from "../../page/Login";


const LoginFacebook = ({history}) => {

    const componentClasses = useStyles();

    const [error, setErrors] = useState("");
    const Auth = useContext(AuthContext);
    const {t} = useTranslation();

    const signInWithFacebook = async () => {
        try {
            const provider = new firebase.auth.FacebookAuthProvider();
            const credential = await firebase.auth().signInWithPopup(provider);
            const userInfo = await loginCredential(credential);

            if (userInfo) {
                Auth.setUserInfo(userInfo);
                history.push('/community');
            }
            // firebase
            //     .auth()
            //     .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            //     .then(() => {
            //         firebase
            //             .auth()
            //             .signInWithPopup(provider)
            //             .then(result => {
            //                 Auth.setUserInfo({
            //                     displayName: result.user.displayName,
            //                     email: result.user.email,
            //                     emailVerified: result.user.emailVerified,
            //                     uid: result.user.uid,
            //                     photoURL: result.user.photoURL,
            //                     isLoggedIn: true
            //                 });
            //                 history.push('/community');
            //             })
            //             .catch(e => setErrors(e.message))
            //     })
        } catch (error) {
            console.error("Error on try loggin with Facebook, ", error);
            setErrors(error);
            history.push('/')
        }
    };

    return (
        <div>
            <Button onClick={() => signInWithFacebook()}
                    variant="contained" type="button"
                    classes={{
                        root: componentClasses.root
                    }}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg"
                    alt="logo"
                    height={20}
                />&nbsp;{t('login-with-facebook')}
            </Button>
            <span>{error}</span>
        </div>
    );
};

export default withRouter(LoginFacebook);
