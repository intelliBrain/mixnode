import React, {Component} from 'react';
import {connect} from 'react-redux';

import Navigation from '../components/Navigation';
import PlayerContainer from '../containers/PlayerContainer';

class AppContainer extends Component {
    render () {
        return (
            <div id='mixnode'>
                <div id='header'>
                    <Navigation />
                </div>
                <div id='main'>
                    {this.props.children}
                    <PlayerContainer />
                </div>
            </div>
        );
    }
}

function mapState (state) {
    const {browser, player} = state;
    return {browser, player};
}

export default connect(mapState)(AppContainer);
