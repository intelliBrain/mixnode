import { connect } from 'react-redux';
import React, {Component} from 'react';
import User from '../user/user.component';

class Navigation extends Component {
    render () {
        return (
            <nav id='header-navigation'>
                <div id='mixnode-logo'>
                    <img src='images/logo.png' />
                    <span>Mixnode</span>
                </div>
                <div id='header-links'>
                    <div className='link'>
                        <span>Your feed</span>
                    </div>
                    <div className='link'>
                        <span>Playlist</span>
                    </div>
                    <div className='link'>
                        <span>Discover</span>
                    </div>
                </div>
                <User {...this.props} />
            </nav>
        );
    }
}

function mapState (state) {
    const {user} = state;
    return {user};
}

export default connect(mapState)(Navigation);
