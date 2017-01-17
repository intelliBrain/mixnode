import React, { Component } from 'react';

import { playerVolume } from '../../player.actions';

export default class VolumeControl extends Component {
    constructor(props) {
        super(props);

        this.setVolume = this.setVolume.bind(this);
    }

    setVolume(offset, elWidth) {
        const { dispatch } = this.props;
        const volume = offset / elWidth;
        dispatch(playerVolume(volume));
    }

    render() {
        return (
            <div className='stream-player-volume-control-wrapper'>
                <progress
                    className='stream-player-volume-control'
                    min='0'
                    max={100}
                    value={ this.props.volume * 100 }
                    onClick={(e) => this.setVolume(e.nativeEvent.offsetX, e.target.offsetWidth)}
                    />
                <div className='stream-player-volume-icon'>
                    <span className='material-icons'>volume_up</span>
                </div>
            </div>
        );
    }
}
