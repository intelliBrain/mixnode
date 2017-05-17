import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import {
    initPlayer,
    playerNext,
    playerPlay,
    playerPause,
    playerPrev,
    playerProgress,
    playerSeek,
    playerVolume,
    removeFromQueue,
    loadQueue,
    loadStream
} from './player.actions';
import MixcloudWidget from './components/mixcloud-widget.component';
import StreamPlayer from './stream-player/stream-player.component';
import Queue from './queue/queue.component';

class Player extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.getInitialQueueData = this.getInitialQueueData.bind(this);
        this.postWidgetMount = this.postWidgetMount.bind(this);
    }

    public getInitialQueueData() {
        let queueData: any = localStorage.getItem('queueData') || [];
        if (queueData.length > 0) {
            queueData = JSON.parse(queueData);
            if (queueData.length) {
                this.props.loadQueue(queueData);
                this.props.loadStream(queueData[0]);
            } else {
                this.props.loadStream({ key: '/spartacus/party-time/' });
            }
        } else {
            localStorage.setItem('queueData', '[]');
        }
    }

    public postWidgetMount(player: any) {
        player.initPlayer().then(this.getInitialQueueData);
    }

    public render() {
        return (
            <div className='player-wrapper'>
                <Queue {...this.props} />
                <StreamPlayer {...this.props} />
                <MixcloudWidget ref={this.postWidgetMount} {...this.props} />
            </div>
        );
    }
}

const mapState = (state: any) => {
    const { player } = state;
    return { player };
};

const mapDispatch = (dispatch: Dispatch<any>) => ({
    initPlayer: (widget: any) => dispatch(initPlayer(widget)),
    playerPlay: () => dispatch(playerPlay()),
    playerPause: () => dispatch(playerPause()),
    playerNext: () => dispatch(playerNext()),
    playerPrev: () => dispatch(playerPrev()),
    playerProgress: (progress: number) => dispatch(playerProgress(progress)),
    playerSeek: (n: number) => dispatch(playerSeek(n)),
    playerVolume: (n: number) => dispatch(playerVolume(n)),
    loadStream: (stream: any, play: boolean) => dispatch(loadStream(stream, play)),
    loadQueue: (data: any) => dispatch(loadQueue(data)),
    removeStream: (streamId: number) => dispatch(removeFromQueue(streamId))
});

export default connect(mapState, mapDispatch)(Player);
