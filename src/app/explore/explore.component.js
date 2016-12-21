import React, {Component, PropTypes} from 'react';
import {getPopular} from './explore.actions';
import {loadSong} from '../player/player.actions';

const propTypes = {
    feeds: PropTypes.object
};

class Explore extends Component {

    constructor (props) {
        super(props);
        this.loadSong = this.loadSong.bind(this);
    }

    componentWillMount () {
        const {dispatch} = this.props;
        dispatch(getPopular());
    }

    /**
     * Loads the song into the player with autoplay
     * @param {string} key - classic mixcloud key
     */
    loadSong (key) {
        const {dispatch} = this.props;
        dispatch(loadSong(key));
    }

    render () {
        let {feeds} = this.props.explore || [];
        return (
           <div id='browser'>
               <div id='feeds'>
                   {feeds.map((feed) => {
                       return (
                            <div className='browser-box' key={feed.key} onClick={() => this.loadSong(feed.key)}>
                                   <img src={feed.pictures.medium} />
                                   <span>{feed.user.name} - {feed.name}</span>
                            </div>
                       );
                   })}
               </div>
           </div>
       );
    }
}

Explore.propTypes = propTypes;

export default Explore;
