import * as React from 'react';

class QueueStream extends React.Component<any, any> {
    public render() {
        const { stream } = this.props;
        const className = `player-queue-stream-wrapper ${this.props.active ? 'active' : ''}`;
        return (
            <div className={className}>
                <span
                    className='material-icons remove-queue-stream'
                    onClick={() => this.props.remove(stream.id)}>
                    remove_circle
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
