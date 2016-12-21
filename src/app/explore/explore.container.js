import React, {Component} from 'react';
import {connect} from 'react-redux';

import Explore from './explore.component';

class ExploreContainer extends Component {
    render () {
        return <Explore {...this.props}/>;
    }
}

function mapState (state) {
    const {explore, player} = state;
    return {explore, player};
}

export default connect(mapState)(ExploreContainer);
