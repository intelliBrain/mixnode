import * as React from 'react';

export default class PlayerActions extends React.Component<any, any> {
    public render() {
        return (
            <div className='stream-player-actions'>
                <div className='stream-player-action'>
                    <span className='material-icons'>favorite_outline</span>
                </div>
                <div className='stream-player-action'>
                    <span className='material-icons'>playlist_add</span>
                </div>
            </div>
        );
    }
}
