import React, {Component} from 'react';
import {connect} from 'react-redux';

import Browser from '../components/Browser';

class BrowserContainer extends Component {
    render () {
        return <Browser {...this.props}/>;
    }
}

function mapState (state) {
    const {browser, player} = state;
    return {browser, player};
}

export default connect(mapState)(BrowserContainer);
