import React, {Component} from 'react';

import {playerNext, playerPrev} from '../player.actions';

class QueueControls extends Component {
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
            <div className='player-queue-controls-wrapper'>
                <div
                    className='player-queue-control queue-skip-prev'
                    onClick={this.prev}>
                    <i className='material-icons'>skip_previous</i>
                </div>
                <div className='player-queue-cover'>
                    <img src={cover} />
                </div>
                <div
                    className='player-queue-control queue-skip-next'
                    onClick={this.next}>
                    <i className='material-icons'>skip_next</i>
                </div>
            </div>
        );
    }
}

export default QueueControls;
