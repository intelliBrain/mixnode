import React, {Component} from 'react';
import {connect} from 'react-redux';

import Navigation from '../components/Navigation';
import Player from '../components/Player';
import BrowserContainer from '../containers/BrowserContainer';

class AppContainer extends Component {
    render() {
        return (
            <div id='mixnode'>
                <div id='sidebar'>
                    <Navigation />
                </div>
                <div id='main'>
                    <BrowserContainer />
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
