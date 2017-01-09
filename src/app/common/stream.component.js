import React, {Component} from 'react';
import Link from 'react-router/lib/Link';
import {loadStream, addToQueue} from '../player/player.actions';

class Stream extends Component {
    constructor (props) {
        super(props);
        this.addToQueue = this.addToQueue.bind(this);
    }


    formatStream(stream, id) {
        return {
            id,
            key: stream.key,
            user: stream.user.name,
            cover: stream.pictures.thumbnail,
            title: stream.name
        };
    }

    addToQueue (stream, play) {
        const {dispatch} = this.props;

        let queueStorage = JSON.parse(localStorage.getItem('queueData'));
        stream = this.formatStream(stream, queueStorage.length + 1);

        queueStorage = [...queueStorage, stream];
        localStorage.setItem('queueData', JSON.stringify(queueStorage));

        dispatch(addToQueue(stream));

        if(play) {
            dispatch(loadStream(stream, true));
        }
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
                            <span
                                className="material-icons"
                                onClick={() => this.addToQueue(data, true)}>
                                    play_circle_outline
                            </span>
                            <span
                                className="material-icons"
                                onClick={() => this.addToQueue(data)}>
                                    playlist_add
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
