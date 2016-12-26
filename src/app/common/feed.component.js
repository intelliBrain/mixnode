import React, {Component} from 'react';
import Link from 'react-router/lib/Link';
import {loadSong} from '../player/player.actions';

class Feed extends Component {
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

    render () {
        const userLink = `/user/${this.props.data.user.username}`;
        return (
            <div
                className='card-info-wrapper --explore-card'>
                    <div 
                        className='card-cover-img'>
                        <div className='card-cover-img-overlay'>
                            <span className="material-icons"
                                onClick={() => this.loadSong(this.props.data.key)}>
                                play_circle_outline
                        </span>
                        </div>
                        <img src={this.resizeImg(this.props.data.pictures.medium)} />
                    </div>
                    <div className="card-text">
                        <div className='card-title-text' >
                            {this.props.data.name}
                        </div>
                        <div className='card-subtitle-text' >
                            by <Link to={userLink}>{this.props.data.user.name}</Link>
                        </div>
                    </div>
            </div>
       );
    }
}

export default Feed;
