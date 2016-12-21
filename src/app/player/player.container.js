import React, {Component} from 'react';
import {connect} from 'react-redux';

import Player from './player.component';

class PlayerContainer extends Component {
    render () {
        return <Player {...this.props}/>;
    }
}

function mapState (state) {
    const {player} = state;
    return {player};
}

export default connect(mapState)(PlayerContainer);
