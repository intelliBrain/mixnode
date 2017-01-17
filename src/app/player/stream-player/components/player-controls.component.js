import React, { Component } from 'react';

import { playerPause, playerPlay, playerNext, playerPrev } from '../../player.actions';

export default class PlayerControls extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
    }

    next() {
        const { dispatch } = this.props;
        dispatch(playerNext());
    }

    prev() {
        const { dispatch } = this.props;
        dispatch(playerPrev());
    }

    togglePlay() {
        const { dispatch } = this.props;
        if(this.props.player.status.playing) {
            return dispatch(playerPause());
        }
        return dispatch(playerPlay());
    }

    render() {
        return (
            <div className='stream-player-controls'>
                <div
                    className='stream-player-control stream-player-prev'
                    onClick={this.prev}>
                    <span className='material-icons'>skip_previous</span>
                </div>
                <div className='stream-player-control stream-player-playpause'
                    onClick={this.togglePlay}>
                    {
                        this.props.player.status.playing ?
                        <span className='material-icons'>pause</span> :
                        <span className='material-icons'>play_arrow</span>
                    }
                </div>
                <div className='stream-player-control stream-player-next'
                    onClick={this.next}>
                    <span className='material-icons'>skip_next</span>
                </div>
            </div>
        );
    }
}
