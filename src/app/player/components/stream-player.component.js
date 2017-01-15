import React, { Component } from 'react';

import {playerNext, playerPrev} from '../player.actions';

export default class StreamPlayer extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    next() {
        const { dispatch } = this.props;
        dispatch(playerNext());
    }

    prev() {
        const { dispatch } = this.props;
        dispatch(playerPrev());
    }

    render () {
        const { cover } = this.props.player.currentStream || '';
        return (
            <div className='stream-player-wrapper'>
                <div className='stream-player-info-wrapper'>
                    <div className='stream-player-cover'>
                        <img src={cover} />
                    </div>
                    <div className='stream-player-stream-info'>
                        <div className='stream-player-info-title'>
                            { this.props.player.currentStream.title }
                        </div>
                        <div className='stream-player-info-subtitle'>
                            { this.props.player.currentStream.user }
                        </div>
                    </div>
                    <div className='stream-player-actions'>
                        <div className='stream-player-action'>
                            <span className='material-icons'>favorite_outline</span>
                        </div>
                        <div className='stream-player-action'>
                            <span className='material-icons'>playlist_add</span>
                        </div>
                    </div>
                </div>
                <div className='stream-player-controller'>
                    <div className='stream-player-controls'>
                        <div className='stream-player-control stream-player-prev'>
                            <span className='material-icons'>skip_previous</span>
                        </div>
                        <div className='stream-player-control stream-player-playpause'>
                            <span className='material-icons'>play_arrow</span>
                        </div>
                        <div className='stream-player-control stream-player-next'>
                            <span className='material-icons'>skip_next</span>
                        </div>
                    </div>
                    <div className='stream-player-volume-control-wrapper'>
                        <progress
                            className='stream-player-volume-control'
                            min='0'
                            max='100'
                            value='73' />
                        <div className='stream-player-volume-icon'>
                            <span className='material-icons'>volume_up</span>
                        </div>
                    </div>
                    </div>
                <progress
                    className='stream-player-progressbar'
                    min='0'
                    max='100'
                    value='43' />
            </div>
        );
    }

}
