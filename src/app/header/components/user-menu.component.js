const {ipcRenderer} = require('electron');
import React, {Component} from 'react';

class UserMenu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };

        this.logIn = this.logIn.bind(this);
        this.renderList = this.renderList.bind(this);
        this.renderUserIcon = this.renderUserIcon.bind(this);

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
