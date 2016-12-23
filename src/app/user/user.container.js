import {connect} from 'react-redux';
import React, {Component} from 'react';

class UserContainer extends Component {
    render () {
        return (
            <div className='user-wrapper'>
            </div>
        );
    }
}

function mapState(state) {
    const {user} = state;
    return {user};
}

export default connect(mapState)(UserContainer);
