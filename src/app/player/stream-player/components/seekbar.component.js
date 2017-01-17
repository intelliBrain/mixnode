import React, { Component } from 'react';
import { duration } from 'moment';

import { playerSeek } from '../../player.actions';

export default class Seekbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: null,
            mouseX: null
        };

        this.seek = this.seek.bind(this);
        this.handleHoverOut = this.handleHoverOut.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    seek(offset, elWidth) {
        const { dispatch } = this.props;
        const seekTo = (offset * this.props.duration) / elWidth;
        dispatch(playerSeek(seekTo));
    }

    handleHover(event) {
        const offset = event.nativeEvent.offsetX;
        const elWidth = event.target.offsetWidth;

        let hours, minutes, seconds;

        const hoverValue = duration(1000 * (offset * this.props.duration) / elWidth);
        hours = hoverValue.hours();
        minutes = hoverValue.minutes();
        seconds = hoverValue.seconds().toString() || '00';

        this.setState({
            mouseX: offset,
            hovered: `${hours ? hours + ':' : ''}${minutes ? minutes + ':' : ''}${seconds.length > 1 ? seconds : '0' + seconds}`
        });
    }

    handleHoverOut() {
        this.setState({ hovered: null, mouseX: null });
    }

    render() {
        const style = { left: `${this.state.mouseX}px` };
        return (
            <div
                className='seekbar-wrapper'
                onClick={(e) => this.seek(e.nativeEvent.offsetX, e.target.offsetWidth)}
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
