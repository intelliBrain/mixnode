import * as React from 'react';

export default class PlayerControls extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.togglePlay = this.togglePlay.bind(this);
    }

    public togglePlay() {
        const { player, playerPlay, playerPause } = this.props;
        return player.status.playing ? playerPause() : playerPlay();
    }

    public render() {
        return (
            <div className='stream-player-controls'>
                <div
                    className='stream-player-control stream-player-prev'
                    onClick={this.props.playerPrev}>
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
                    onClick={this.props.playerNext}>
                    <span className='material-icons'>skip_next</span>
                </div>
            </div>
        );
    }
}
