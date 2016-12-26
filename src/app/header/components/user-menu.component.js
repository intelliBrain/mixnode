const {ipcRenderer} = require('electron');
import React, {Component} from 'react';
import Link from 'react-router/lib/Link';

class UserMenu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };

        this.logIn = this.logIn.bind(this);
        this.renderList = this.renderList.bind(this);
        this.renderUserIcon = this.renderUserIcon.bind(this);
        this.renderAuthList = this.renderAuthList.bind(this);

    }

    toggleMenu () {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }

    logIn () {
        ipcRenderer.send('user-auth');
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
                    <Link to={userLink}>Profile</Link>
                </div>
                <div
                    className='menu-list-item'
                    onClick={() => window.close()} >
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
                                Log in
                        </div>
                        <div
                            className='menu-list-item'
                            onClick={() => window.close()} >
                                Quit (Ctrl + Q)
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
