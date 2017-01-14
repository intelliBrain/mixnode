import { connect } from 'react-redux';
import React, { Component } from 'react';

import { initPlayer, loadQueue, loadStream, playerNext } from './player.actions';
import Queue from './components/queue.component';
import QueueControls from './components/queue-controls.component';

class Player extends Component {
    constructor (props) {
        super(props);

        this.addWidgetScript = this.addWidgetScript.bind(this);
        this.initPlayer = this.initPlayer.bind(this);
        this.widgetPostInitHook = this.widgetPostInitHook.bind(this);
        this.getInitialQueueData = this.getInitialQueueData.bind(this);
    }

    componentDidMount() {
        this.initPlayer();
    }

    initPlayer() {
        let initStream = this.props.player.currentStream;

        const widgetOptions = {
            disablePushstate: true,
            disableUnloadWarning: true,
            light: false,
            hide_artwork: true
        };

        const playerWidget = this.addWidgetScript(initStream.key, widgetOptions);
        playerWidget.onload = () =>
            Mixcloud.FooterWidget(initStream.key, widgetOptions).then(
                (widget) => this.widgetPostInitHook(widget)
            );
    }

    widgetPostInitHook(widget) {
        const { dispatch } = this.props;

        widget.events.ended.on(() => dispatch(playerNext()));
        dispatch(initPlayer(widget));
        this.getInitialQueueData();
    }

    getInitialQueueData() {
        let queueData = localStorage.getItem('queueData') || [];
        if(queueData.length > 0) {
            queueData = JSON.parse(queueData);
            const { dispatch } = this.props;
            dispatch(loadQueue(queueData));
            dispatch(loadStream(queueData[0]));
        } else {
            localStorage.setItem('queueData', '[]');
        }
    }

    addWidgetScript () {
        let script = document.createElement('script');
        script.src = 'https://widget.mixcloud.com/media/js/footerWidgetApi.js';
        document.body.appendChild(script);
        return script;
    }

    render () {
        return (
            <div className='player-wrapper'>
                <Queue {...this.props} />
                <QueueControls {...this.props} />
            </div>
        );
    }
}

function mapState (state) {
    const {player} = state;
    return {player};
}

export default connect(mapState)(Player);
