import React, {Component} from 'react';
import {loadSong} from '../actions/playerActions';

// Mixcloud widget
require('../vendor/widgetPlayer.js');

class Player extends Component {
    constructor (props) {
        super(props);
        console.log(props);
    }

    componentDidMount () {
        const {dispatch} = this.props;
        dispatch(loadSong('/spartacus/party-time/'));
    }

    render () {
        return (
            <div id='player'>
                <iframe id='player-widget' src={this.props.player.playingSong} frameborder='0'></iframe>
            </div>
        );
    }
}

export default Player;
