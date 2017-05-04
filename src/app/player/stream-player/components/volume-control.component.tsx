import * as React from 'react';

import { playerVolume } from '../../player.actions';

export default class VolumeControl extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.setVolume = this.setVolume.bind(this);
    }

    public setVolume(offset: number, element: HTMLElement) {
        const { dispatch } = this.props;
        const volume = offset / element.offsetWidth;
        dispatch(playerVolume(volume));
    }

    public render() {
        return (
            <div className='stream-player-volume-control-wrapper'>
                <progress
                    className='stream-player-volume-control'
                    min='0'
                    max={100}
                    value={ this.props.volume * 100 }
                    onClick={(e) => this.setVolume(e.nativeEvent.offsetX, e.target as HTMLElement)}
                    />
                <div className='stream-player-volume-icon'>
                    <span className='material-icons'>volume_up</span>
                </div>
            </div>
        );
    }
}
