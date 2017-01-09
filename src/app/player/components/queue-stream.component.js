import React, {Component} from 'react';


class QueueStream extends Component {
    render () {
        const { stream } = this.props;
        let className = `player-queue-stream-wrapper ${this.props.active ? 'active' : ''}`;
        return (
            <div className={className} > 
                <span
                    className='remove-queue-stream ss-delete'
                    onClick={() => this.props.remove(stream.id)}>
                </span>
                <img
                    className='queue-stream-cover'
                    onClick={() => this.props.load(stream)}
                    src={stream.cover} />

                <div
                    className='queue-stream-info'
                    onClick={() => this.props.load(stream)}>
                    <span className='queue-stream-info-title'>
                        {stream.title}
                    </span>
                    <span className='queue-stream-info-user'>
                        {stream.user}
                    </span>
                </div>
            </div>
        );
    }
}

export default QueueStream;
