import React, {Component} from 'react';
import Link from 'react-router/lib/Link';
import {loadSong} from '../player/player.actions';

class Stream extends Component {
    constructor (props) {
        super(props);
        this.loadSong = this.loadSong.bind(this);
    }

    /**
     * Loads the song into the player with autoplay
     * @param {string} key - classic mixcloud key
     */
    loadSong (key) {
        const {dispatch} = this.props;
        dispatch(loadSong(key));
    }

    resizeImg(url) {
        let tmp = url.split('100x100');
        return tmp[0] + '150x150' + tmp[1];
    }

    wrapText(text) {
        if(text.length > 50) {
            return `${text.slice(0, 50)}...`;
        }
        return text;
    }

    getTime(time) {
        const formatHours = (value) => {
            const hours = Math.floor(value / 3600);
            const minutes = Math.floor((value - (hours * 3600)) / 60);

            return minutes ? `${hours}h${minutes}m` : `${hours}h`;
        };

        return time >= 3600 ? formatHours(time) : `${Math.floor(time / 60)}m`;
    }

    render () {
        const { data } = this.props;
        const userLink = `/user/${data.user.username}`;
        return (
            <div
                className='stream-wrapper'>
                    <div 
                        className='stream-cover-img'>
                        <div className='stream-cover-img-overlay'>
                            <span className="material-icons"
                                onClick={() => this.loadSong(data.key)}>
                                play_circle_outline
                        </span>
                        </div>
                        <img src={this.resizeImg(data.pictures.medium)} />
                    </div>
                    <div className="stream-info">
                        <div className='stream-title' >
                            {this.wrapText(data.name)}
                        </div>
                        <div className='stream-subtitle' >
                            by <Link to={userLink}>{data.user.name}</Link>
                        </div>
                        <div className='stream-stats-block'>
                            <div className='stream-stat'>
                                <i className='material-icons'>access_time</i>
                                <span>{this.getTime(data.audio_length)}</span>
                            </div>
                            <div className='stream-stat'>
                                <i className='material-icons'>play_arrow</i>
                                <span>{data.play_count}</span>
                            </div>
                            <div className='stream-stat'>
                                <i className='material-icons'>favorite</i>
                                <span>{data.favorite_count}</span>
                            </div>
                            <div className='stream-stat'>
                                <i className='material-icons'>repeat</i>
                                <span>{data.repost_count}</span>
                            </div>
                        </div>
                    </div>
            </div>
       );
    }
}

export default Stream;
