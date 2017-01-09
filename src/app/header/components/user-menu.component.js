const {ipcRenderer} = require('electron');
import React, {Component} from 'react';
import Link from 'react-router/lib/Link';
import {logOut} from '../../user/user.actions';

class UserMenu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };

        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
        this.renderList = this.renderList.bind(this);
        this.renderUserIcon = this.renderUserIcon.bind(this);
        this.renderAuthList = this.renderAuthList.bind(this);

    }

    toggleMenu () {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }

    logIn() {
        ipcRenderer.send('user-auth');
    }

    logOut() {
        const { dispatch } = this.props;
        dispatch(logOut());
    }

    renderUserIcon() {
        if(this.props.user.loggedIn) {
            return (
                <img
                    className='user-account-icon'
                    src={this.props.user.data.pictures.medium}/>
            );
        } else {
            return (
                <div className='material-icons anon-account-icon'>
                        account_circle
                </div>
            );
        }
    }

    renderAuthList() {
        const userLink = `/user/${this.props.user.data.username}`;
        return (
            <div className='menu-list'>
                <div className='menu-list-item'>
                    <i className='material-icons'>person</i>
                    <Link to={userLink}>Profile</Link>
                </div>
                <div
                    className='menu-list-item'
                    onClick={this.logOut} >
                        <i className='material-icons'>highlight_off</i>
                        Log out
                </div>
                <div
                    className='menu-list-item'
                    onClick={() => window.close()} >
                        <i className='material-icons'>power_settings_new</i>
                        Quit
                </div>
            </div>
        );
    }

    renderList() {
        if(this.state.isMenuOpen) {
            if(!this.props.user.loggedIn){
                return (
                    <div className='menu-list'>
                        <div
                            className='menu-list-item'
                            onClick={this.logIn} >
                                <i className='material-icons'>person_add</i>
                                Log in
                        </div>
                        <div
                            className='menu-list-item'
                            onClick={() => window.close()} >
                                <i className='material-icons'>power_settings_new</i>
                                Quit
                        </div>
                    </div>
                );
            } else {
                return this.renderAuthList();
            }
        }
    }

    render () {
        return (
            <div className='user-menu-wrapper'
                onClick={() => this.toggleMenu()} >
                {this.renderUserIcon()}
                <div className='material-icons user-menu-arrow-down'>
                    keyboard_arrow_down
                </div>
                {this.renderList()}
            </div>
        );
    }

}

export default UserMenu;
