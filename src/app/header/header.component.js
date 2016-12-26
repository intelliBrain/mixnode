import { connect } from 'react-redux';
import React, {Component} from 'react';
import Link from 'react-router/lib/Link';

import Search from '../search/search.container';
import UserMenu from './components/user-menu.component';

class Navigation extends Component {
    render () {
        return (
            <header className='header-wrapper'>
                <div className='header-logo-wrapper'>
                    <span className='header-logo-text'>Mixnode</span>
                </div>
                <Search />
                <div className='header-links'>
                    <Link className='link' to='/'>
                        Explore
                    </Link>
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
