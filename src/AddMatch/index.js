import React from "react";
import useStyles from "./css";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import firebase from "../firebase";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Paper from "@material-ui/core/Paper";
import UserAvatar from "../UserAvatar";
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const AddMatch = ({}) => {
    const componentClasses = useStyles();

    const {t} = useTranslation();

    const handleForm = e => {
        e.preventDefault();

        firebase
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {

            });
    };

    return (
        <div className={componentClasses.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={componentClasses.item}>
                    <Paper className={componentClasses.paper}>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <form noValidate onSubmit={e => handleForm(e)}>
                                    <h3>{t('add-match')}</h3>
                                    <hr/>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label={t('host')}
                                            InputProps={{
                                                readOnly: true,
                                                startAdornment: (
                                                    <UserAvatar showName={false}/>
                                                ),
                                            }}
                                            defaultValue="João Gabriel"
                                            variant="outlined"
                                            helperText={t('the-host-cannot-be-changed')}
                                            placeholder={t('search-match-game')}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label={t('game')}
                                            variant="outlined"
                                            placeholder={t('search-match-game')}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label={t('players')}
                                            variant="outlined"
                                            placeholder={t('search-match-players')}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <ButtonGroup variant="contained" color="primary">
                                            <Button>{t('schedule')}</Button>
                                            <Button>{t('register-match')}</Button>
                                            <Button>{t('play-now')}</Button>
                                        </ButtonGroup>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Button variant="contained">{t('game-rules-manual')}</Button>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Button variant="contained" type="submit">{t('save')}</Button>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default withRouter(AddMatch);
