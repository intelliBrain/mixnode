import { connect } from 'react-redux';
import React, {Component} from 'react';
import Link from 'react-router/lib/Link';

import SearchBar from './components/search-bar.component';
import UserMenu from './components/user-menu.component';

class Navigation extends Component {
    render () {
        return (
            <header className='header-wrapper'>
                <div className='header-logo-wrapper'>
                    <span className='header-logo-text'>Mixnode</span>
                </div>
                <SearchBar {...this.props} />
                <div className='header-links'>
                    <div className='link'>
                        <span>Feed</span>
                    </div>
                    <div className='link'>
                        <Link to='/explore'>Explore</Link>
                    </div>
                </div>
                <UserMenu {...this.props} />
            </header>
        );
    }
}

function mapState (state) {
    const { user } = state;
    return { user };
}

export default connect(mapState)(Navigation);
