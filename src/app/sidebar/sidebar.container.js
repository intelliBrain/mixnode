import {connect} from 'react-redux';
import React, {Component} from 'react';
import Link from 'react-router/lib/Link';

class Sidebar extends Component {

    render() {
        return (
            <div className='sidebar-wrapper'>
                {
                    this.props.user.loggedIn ?
                    <div className='sidebar-list'>
                    </div> :
                    null

                }
                <div className='sidebar-list'>
                    <Link className='sidebar-icon-wrapper' to='/explore/popular' activeClassName='active' >
                        <span className='material-icons sidebar-icon'>whatshot</span>
                    </Link>
                    <Link className='sidebar-icon-wrapper'>
                        <span className='material-icons sidebar-icon'>explore</span>
                    </Link>
                    <Link className='sidebar-icon-wrapper'>
                        <span className='material-icons sidebar-icon'>favorite_border</span>
                    </Link>
                    <Link className='sidebar-icon-wrapper'>
                        <span className='material-icons sidebar-icon'>watch_later</span>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    const { user } = state;
    return {user};
};

export default connect(mapState)(Sidebar);

