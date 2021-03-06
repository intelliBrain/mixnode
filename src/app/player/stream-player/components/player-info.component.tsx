import * as React from 'react';

export default class Info extends React.Component<any, any> {
    public render() {
        return (
            <div className='player-info-wrapper'>
                <div className='stream-player-cover'>
                    <img src={ this.props.cover } />
                </div>
                <div className='stream-player-stream-info'>
                    <div className='stream-player-info-title'>
                        { this.props.title }
                    </div>
                    <div className='stream-player-info-subtitle'>
                        { this.props.user }
                    </div>
                </div>
            </div>
        );
    }
}
