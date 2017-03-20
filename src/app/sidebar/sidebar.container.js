import {connect} from 'react-redux';
import React, {Component} from 'react';
import { push } from 'react-router-redux';

class Sidebar extends Component {

    render() {
        return (
            <div className='sidebar-wrapper'>
                <div className='sidebar-list'>
                    <a className='sidebar-icon-wrapper' onClick={() => this.props.dispatch(push('/'))} >
                        <span className='material-icons sidebar-icon'>home</span>
                    </a>
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

