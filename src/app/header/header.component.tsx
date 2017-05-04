import { connect } from 'react-redux';
import * as React from 'react';

import Search from '../search/search.container';
import UserMenu from './components/user-menu.component';

class Navigation extends React.Component<any, any> {
    public render() {
        return (
            <header className='header-wrapper'>
                <div className='header-logo-wrapper'>
                    <span className='header-logo material-icons'>music_note</span>
                </div>
                <Search />
                <UserMenu {...this.props} />
            </header>
        );
    }
}

function mapState(state: any) {
    const { user } = state;
    return { user };
}

export default connect(mapState)(Navigation);
