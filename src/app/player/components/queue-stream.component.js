import React, {Component} from 'react';

class QueueStream extends Component {
    render () {
        const { stream } = this.props;
        let className = `player-queue-stream-wrapper ${this.props.active ? 'active' : ''}`;
        return (
            <div className={className} onClick={() => this.props.load(stream)}>
                <span className='material-icons remove-queue-stream'>delete_forever</span>
                <img
                    className='queue-stream-cover'
                    src={stream.cover} />

                <div className='queue-stream-info'>
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
