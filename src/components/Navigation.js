import React, {Component} from 'react';

class Navigation extends Component {
    render () {
        return (
            <nav id='sidebar-navigation'>
                <div id='mixnode-logo'>Mixnode</div>
                <div id='sidebar-links'>
                    <div className='link'>Your Feed</div>
                    <div className='link'>Popular</div>
                    <div className='link'>Favorites</div>
                    <div className='link'>New Uploads</div>
                    <div className='link'>Trending</div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
