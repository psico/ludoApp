import React, {useContext} from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Home, Group, Dashboard, AccountCircle, AddCircleOutline} from '@material-ui/icons';
import useStyles from "./css";
import {AuthContext} from "../App";
import {useTranslation} from 'react-i18next';
import {withRouter} from 'react-router-dom';

const Footer = ({history}) => {
    const componentClasses = useStyles();
    const [value, setValue] = React.useState('community');
    const {isLoggedIn} = useContext(AuthContext);
    const {t} = useTranslation();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push('/' + newValue);
    };

    return (
        <span>
        {isLoggedIn ?
            <BottomNavigation
                value={value}
                onChange={handleChange}
                classes={{
                    root: componentClasses.root
                }}>
                <BottomNavigationAction label={t('community')} value="community" icon={<Home/>}
                                        classes={{
                                            selected: componentClasses.selected
                                        }}/>
                <BottomNavigationAction label={t('friends')} value="friends" icon={<Group/>}/>
                <BottomNavigationAction label={t('add-match')} value="addMatch"
                                        icon={<AddCircleOutline fontSize="default"/>}/>
                <BottomNavigationAction label={t('dashboard')} value="dashboard" icon={<Dashboard/>}/>
                <BottomNavigationAction label={t('my-profile')} value="my-profile" icon={<AccountCircle/>}/>

            </BottomNavigation>
            :
            <BottomNavigation classes={{root: componentClasses.root}}/>
        }
        </span>
    )
};

export default withRouter(Footer);
