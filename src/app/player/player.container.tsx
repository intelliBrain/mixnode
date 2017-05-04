import { connect } from 'react-redux';
import * as React from 'react';

import { loadQueue, loadStream } from './player.actions';
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
            const { dispatch } = this.props;
            if (queueData.length) {
                dispatch(loadQueue(queueData));
                dispatch(loadStream(queueData[0]));
            } else {
                dispatch(loadStream({ key: '/spartacus/party-time/' }));
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

function mapState(state: any) {
    const {player} = state;
    return {player};
}

export default connect(mapState)(Player);
