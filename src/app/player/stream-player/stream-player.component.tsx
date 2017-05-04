import * as React from 'react';

import Controls from './components/player-controls.component';
import Seekbar from './components/seekbar.component';
import VolumeControl from './components/volume-control.component';
import PlayerInfo from './components/player-info.component';
import PlayerActions from './components/player-actions.component';

export default class StreamPlayer extends React.Component<any, any> {

    public render() {
        const { cover } = this.props.player.currentStream || '';
        return (
            <div className='stream-player-wrapper'>
                <PlayerInfo
                    cover={ cover }
                    user={ this.props.player.currentStream.user }
                    title={ this.props.player.currentStream.title }/>
                <PlayerActions />
                <VolumeControl
                    dispatch={ this.props.dispatch }
                    volume={ this.props.player.status.volume } />
                <Controls {...this.props}/>
                <Seekbar
                    duration={this.props.player.currentStream.duration || 100}
                    progress={this.props.player.status.progress}
                    dispatch={this.props.dispatch} />
            </div>
        );
    }

}
