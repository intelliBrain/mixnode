import React, {Component} from 'react';

import makeSongUrl from '../utils/songUrl';

//Mixcloud widget
require('../vendor/widgetPlayer.js');

class Player extends Component {
    constructor(props) {
        super(props);
        this.loadSong.bind(this);
    }

    loadSong() {
        return makeSongUrl('spartacus/party-time');
    }

    render() {
        return (
            <div id="player">
                <iframe id="player-widget" src={this.loadSong()} frameborder="0"></iframe>
            </div>
        );
    }
}

export default Player;
