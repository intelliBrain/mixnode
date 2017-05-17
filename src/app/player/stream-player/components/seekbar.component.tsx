import * as React from 'react';
import { duration } from 'moment';

import { playerSeek } from '../../player.actions';

export default class Seekbar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            hovered: null,
            mouseX: null
        };

        this.seek = this.seek.bind(this);
        this.handleHoverOut = this.handleHoverOut.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    public shouldComponentUpdate(nextProps: any) {
        return nextProps.duration > 0;
    }

    public seek(offset: number, element: HTMLElement) {
        const seekTo = (offset * this.props.duration) / element.offsetWidth;
        this.props.playerSeek(seekTo);
    }

    public handleHover(event: React.MouseEvent<any>) {
        const offset = event.nativeEvent.offsetX;
        const target = event.target as HTMLElement;
        const elWidth = target.offsetWidth;

        let hours;
        let minutes;
        let seconds;

        const hoverValue = duration(1000 * (offset * this.props.duration) / elWidth);
        hours = hoverValue.hours();
        minutes = hoverValue.minutes();
        seconds = hoverValue.seconds().toString() || '00';

        this.setState({
            mouseX: offset,
            hovered: `${hours ? hours + ':' : ''}${minutes ? minutes + ':' : ''}${seconds.length > 1 ? seconds : '0' + seconds}`
        });
    }

    public handleHoverOut() {
        this.setState({ hovered: null, mouseX: null });
    }

    public render() {
        const style = { left: `${this.state.mouseX}px` };
        return (
            <div
                className='seekbar-wrapper'
                onClick={(e: React.MouseEvent<any>) => this.seek(e.nativeEvent.offsetX, e.target as HTMLElement)}
                onMouseOut={this.handleHoverOut}
                onMouseMove={this.handleHover}>
                {
                    this.state.hovered ?
                    <span className='seekbar-info' style={style}>
                        {this.state.hovered}
                    </span> :
                    null
                }
                <progress
                    className='seekbar'
                    min='0'
                    max={this.props.duration}
                    value={this.props.progress} />
            </div>
        );
    }
}
