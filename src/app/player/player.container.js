import { connect } from 'react-redux';
import React, { Component } from 'react';

import { loadQueue, loadStream } from './player.actions';
import MixcloudWidget from './components/mixcloud-widget.component';
import StreamPlayer from './stream-player/stream-player.component';
import Queue from './queue/queue.component';

class Player extends Component {
    constructor (props) {
        super(props);

        this.getInitialQueueData = this.getInitialQueueData.bind(this);
        this.postWidgetMount = this.postWidgetMount.bind(this);
    }

    getInitialQueueData() {
        let queueData = localStorage.getItem('queueData') || [];
        if(queueData.length > 0) {
            queueData = JSON.parse(queueData);
            const { dispatch } = this.props;
            if(queueData.length) {
                dispatch(loadQueue(queueData));
                dispatch(loadStream(queueData[0]));
            } else {
                dispatch(loadStream({ key: '/spartacus/party-time/'}));
            }
        } else {
            localStorage.setItem('queueData', '[]');
        }
    }

    postWidgetMount(player) {
        player.initPlayer().then(this.getInitialQueueData);
    }


    render () {
        return (
            <div className='player-wrapper'>
                <Queue {...this.props} />
                <StreamPlayer {...this.props} />
                <MixcloudWidget ref={this.postWidgetMount} {...this.props} />
            </div>
        );
    }
}

function mapState (state) {
    const {player} = state;
    return {player};
}

export default connect(mapState)(Player);
