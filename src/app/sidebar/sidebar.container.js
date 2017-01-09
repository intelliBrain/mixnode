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
                        <div className='sidebar-list-title'>
                            MUSIC
                        </div>
                        <div className='sidebar-list-body'>
                            <div className='sidebar-list-item'>
                                FAVORITES
                            </div>
                            <div className='sidebar-list-item'>
                                LISTEN LATER
                            </div>
                        </div>
                    </div> :
                    null

                }
                <div className='sidebar-list'>
                    <div className='sidebar-list-title'>
                        EXPLORE
                    </div>
                    <div className='sidebar-list-body'>
                        <Link className='sidebar-list-item' to='/explore/popular' activeClassName='active'>
                            POPULAR
                        </Link>
                        <Link className='sidebar-list-item' to='/explore/new' activeClassName='active'>
                            NEW
                        </Link>
                        <Link className='sidebar-list-item' to='/explore/popular'>
                            DISCOVER
                        </Link>
                    </div>
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

