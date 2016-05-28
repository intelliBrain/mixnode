import React, {Component} from 'react';

import Navigation from '../components/Navigation';
import Player from '../components/Player';
import Browser from '../components/Browser';

class AppContainer extends Component {
    constructor(props) {
        super(props);
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

export default AppContainer;
