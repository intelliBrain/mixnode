const {ipcRenderer} = require('electron');
import React, {Component} from 'react';
// import Axios from 'axios';

// import {addUserInfo} from './user.actions';

class UserMenu extends Component {
    constructor () {
        super();
        this.state = {
            isMenuOpen: false
        };

        this.logIn = this.logIn.bind(this);
        this.renderList = this.renderList.bind(this);

    }

    toggleMenu () {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }

    logIn () {
        ipcRenderer.send('user-auth');
    }

    renderList() {
        if(this.state.isMenuOpen) {
            return (
                <div className='menu-list'>
                    <div
                        className='menu-list-item'
                        onClick={this.logIn} >
                            Log in
                    </div>
                </div>
            );
        }
    }

    render () {
        return (
            <div className='user-menu-icon'
                onClick={() => this.toggleMenu()} >
                <div
                    className='material-icons account-icon'>
                        account_circle
                </div>
                <div className='material-icons'>
                    keyboard_arrow_down
                </div>
                {this.renderList()}
            </div>
        );
    }

}

export default UserMenu;
