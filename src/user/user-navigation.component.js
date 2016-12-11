const {ipcRenderer} = require('electron');
import React, {Component} from 'react';

class UserNav extends Component {
    constructor () {
        super();
        this.logIn = this.logIn.bind(this);
        ipcRenderer.on('user-log-in', (event, args) => {
            localStorage.setItem('token', args);
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
