const {ipcRenderer} = require('electron');
import React, {Component} from 'react';
import Axios from 'axios';

import { addUserInfo } from './user.actions';

class UserNav extends Component {
    constructor () {
        super();
        this.logIn = this.logIn.bind(this);
        ipcRenderer.on('user-log-in', (event, args) => {
            const token = args;
            const { dispatch } = this.props;
            localStorage.setItem('token', args);
            Axios.get('https://api.mixcloud.com/me/?access_token=' + token).then(
                // (res) => dispatch(addUserInfo(res.data))
                (res) => console.log(res.data)
            );
        });
    }

    logIn () {
        ipcRenderer.send('user-auth');
    }

    render () {
        return (
            <div id='user-navigation'>
                <div className='user-navigation-link' onClick={() => this.logIn()}>Log in</div>
            </div>
        );
    }
}

export default UserNav;
