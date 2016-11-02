import React, {Component} from 'react';
import {connect} from 'react-redux';

import Navigation from './navigation/navigation.component';
import PlayerContainer from './player/player.container';

class AppContainer extends Component {
    componentDidMount () {
    }

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
    const {browser, player, user} = state;
    return {browser, player, user};
}

export default connect(mapState)(AppContainer);
