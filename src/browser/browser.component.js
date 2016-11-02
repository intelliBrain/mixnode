import React, {Component, PropTypes} from 'react';
import {getPopular} from './browser.actions';
import {loadSong} from '../player/player.actions';

import BrowserSearch from './browser-search.component';

const propTypes = {
    feeds: PropTypes.object
};

class Browser extends Component {

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
        let {feeds} = this.props.browser || [];
        return (
           <div id='browser'>
               <BrowserSearch {...this.props}/>
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

Browser.propTypes = propTypes;

export default Browser;
