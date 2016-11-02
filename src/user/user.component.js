import React, {Component} from 'react';
import UserNav from './user-navigation.component';

class User extends Component {
    constructor () {
        super();
        this.state = {
            isMenuOpen: false
        };
    }

    toggleMenu () {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }

    render () {
        return (
            <div id='user' className='header-icon'>
                <div className='material-icons' onClick={() => this.toggleMenu()} >account_circle</div>
                {this.state.isMenuOpen ? <UserNav /> : null}
            </div>
        );
    }
}

export default User;
