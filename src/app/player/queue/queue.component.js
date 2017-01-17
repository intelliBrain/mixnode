import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';

import { loadStream, removeFromQueue } from '../player.actions';
import QueueStream from './components/queue-stream.component';

class Queue extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleClick(stream) {
        const { dispatch } = this.props;
        dispatch(loadStream(stream, true));
    }

    handleScroll(e) {
        let element = findDOMNode(this).childNodes[0];
        element.scrollLeft += e.deltaY;
        return e;
    }

    removeStream(id) {
        const { dispatch } = this.props;
        dispatch(removeFromQueue(id));
    }

    render () {
        const { queue } = this.props.player;
        return (
            <div className='player-queue-wrapper'>
                <div className='player-queue-list' onWheel={(e) => this.handleScroll(e)}>
                {
                    queue.map(
                        (stream, i) => 
                            <QueueStream
                                key={i}
                                active={this.props.player.currentStream.id === stream.id}
                                load={this.handleClick}
                                remove={() => this.removeStream(stream.id)}
                                stream={stream} />
                    )
                }
                </div>
            </div>
        );
    }
}

export default Queue;