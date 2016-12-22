import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getPopular} from './explore.actions';
import {loadSong} from '../player/player.actions';

class ExploreContainer extends Component {
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
           <div className='explore-wrapper'>
                {feeds.map(
                    (feed) => 
                        <div
                            className='card-info-wrapper --explore-card'
                            key={feed.key}
                            onClick={() => this.loadSong(feed.key)}>
                                <img 
                                    className='card-cover-img'
                                    src={feed.pictures.medium} />
                                <div className="card-text">
                                    <div className='card-title-text' >
                                        {feed.name}
                                    </div>
                                    <div className='card-subtitle-text' >
                                        {feed.user.name}
                                    </div>
                                </div>
                        </div>
                )}
           </div>
       );
    }
}

function mapState (state) {
    const {explore, player} = state;
    return {explore, player};
}

export default connect(mapState)(ExploreContainer);
