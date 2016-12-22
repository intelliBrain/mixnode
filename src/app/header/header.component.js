import { connect } from 'react-redux';
import React, {Component} from 'react';
import SearchBar from './components/search-bar.component';

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
                        <span>Your feed</span>
                    </div>
                    <div className='link'>
                        <span>Playlist</span>
                    </div>
                    <div className='link'>
                        <span>Discover</span>
                    </div>
                </div>
            </header>
        );
    }
}

function mapState (state) {
    const {user} = state;
    return {user};
}

export default connect(mapState)(Navigation);
