import {connect} from 'react-redux';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    render() {
        return (
            <div className='sidebar-wrapper'>
                <div className='sidebar-list'>
                    <Link className='sidebar-icon-wrapper' to='/explore' >
                        <span className='material-icons sidebar-icon'>home</span>
                    </Link>
                    <a className='sidebar-icon-wrapper'>
                        <span className='material-icons sidebar-icon'>explore</span>
                    </a>
                    <a className='sidebar-icon-wrapper'>
                        <span className='material-icons sidebar-icon'>favorite_border</span>
                    </a>
                    <a className='sidebar-icon-wrapper'>
                        <span className='material-icons sidebar-icon'>watch_later</span>
                    </a>
                </div>
            </div>
        );
    }
}

const mapState = (state) => {
    const { user } = state;
    return { user };
};

export default connect(mapState)(Sidebar);

