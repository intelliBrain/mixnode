import React, {Component} from 'react';
import {connect} from 'react-redux';

import Navigation from '../components/Navigation';
import Player from '../components/Player';
import Browser from '../components/Browser';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        console.log(this, props);
    }

    render() {
        return (
            <div id='mixnode'>
                <div id='sidebar'>
                    <Navigation />
                </div>
                <div id='main'>
                    <Browser />
                    <Player />
                </div>
            </div>
        );
    }
}

function mapState(state){
    const {browser, player} = state;
    return {browser, player};
}

export default connect(mapState)(AppContainer);
