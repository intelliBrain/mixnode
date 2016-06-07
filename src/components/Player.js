import React, {Component} from 'react';
import {loadSong} from '../actions/playerActions';

// Mixcloud widget
require('../vendor/widgetPlayer.js');

class Player extends Component {
    constructor (props) {
        super(props);
        this.state = {
            player: null
        };
    }

    componentDidMount () {
        const {dispatch} = this.props;
        dispatch(loadSong('/spartacus/party-time/'));
        // let iframer = document.getElementById('player-widget').contentDocument;
        // if (iframer.readyState === 'complete') {
        //     let widget = Mixcloud.PlayerWidget(document.getElementById('player-widget'));
        //     widget.ready.then(() => {
        //         // Put code that interacts with the widget here
        //     });
        // }
    }

    render () {
        return (
            <div id='player'>
                <iframe id='player-widget' name='player-widget' src={this.props.player.playingSong} frameborder='0'></iframe>
            </div>
        );
    }
}

export default Player;
