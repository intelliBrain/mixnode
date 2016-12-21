const {ipcRenderer} = require('electron');
import React, {Component} from 'react';
import Axios from 'axios';

class UserNav extends Component {
    constructor () {
        super();
        this.logIn = this.logIn.bind(this);
        ipcRenderer.on('user-log-in', (event, args) => {
            const token = args;
            localStorage.setItem('token', args);
            Axios.get('https://api.mixcloud.com/me/?access_token=' + token).then(res => console.log(res));
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
