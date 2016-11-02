import React, {Component} from 'react';

import {initPlayer} from './player.actions';

class Player extends Component {
    constructor (props) {
        super(props);
        this.state = {
            widget: null
        };
        this.addWidget = this.addWidget.bind(this);

        this.addWidget();
    }

    registerPlayer () {
        const {dispatch} = this.props;
        let playerContainer = document.querySelector('#player');
        React.createElement('iframe');

        let playerWidget = document.createElement('iframe');
        playerWidget.id = 'player-widget';
        playerWidget.name = 'player-widget';
        playerWidget.src = 'https://www.mixcloud.com/widget/iframe/?feed=https://www.mixcloud.com/spartacus/party-time/&hide_cover=1&light=1';

        playerContainer.appendChild(playerWidget);
        let widget = window.Mixcloud.PlayerWidget(playerWidget);

        widget.ready.then(() => {
            dispatch(initPlayer(widget));
            widget.load('/spartacus/lambiance/');
        });
    }

    addWidget () {
        let script = document.createElement('script');

        script.src = 'http://widget.mixcloud.com/media/js/widgetApi.js';
        document.body.appendChild(script);

        script.onload = () => {
            this.registerPlayer();
        };
    }

    render () {
        return (
            <div id='player'></div>
        );
    }
}

export default Player;
