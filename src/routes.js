import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import SignUp from './components/pages/signup';
import PasswordChanger from './components/pages/passwordchanger';
import App from '../App';

export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" Component={App} title="Loginpage" initial={true}></Scene>
                    <Scene key="register" Component={SignUp} title="Register"></Scene>
                    <Scene key="passchange" Component={PasswordChanger} title="ResetPassword"></Scene>
                </Stack>
            </Router>
        )
    }
}