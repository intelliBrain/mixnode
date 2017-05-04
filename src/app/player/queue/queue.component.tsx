import * as React from 'react';
import {findDOMNode} from 'react-dom';

import { loadStream, removeFromQueue } from '../player.actions';
import QueueStream from './components/queue-stream.component';

class Queue extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    public handleClick(stream: any) {
        const { dispatch } = this.props;
        dispatch(loadStream(stream, true));
    }

    public handleScroll(e: React.WheelEvent<any>) {
        const element: any = findDOMNode(this).childNodes[0];
        element.scrollLeft += e.deltaY;
        return e;
    }

    public removeStream(id: number) {
        const { dispatch } = this.props;
        dispatch(removeFromQueue(id));
    }

    public render() {
        const { queue } = this.props.player;
        return (
            <div className='player-queue-wrapper'>
                <div
                    className='player-queue-list'
                    onWheel={(e: React.WheelEvent<any>) => this.handleScroll(e)}>
                {
                    !queue.length &&
                    <span className='queue-full-message'>
                        Queue is empty.
                    </span>
                }
                {
                    queue.map(
                        (stream: any, i: number) =>
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
