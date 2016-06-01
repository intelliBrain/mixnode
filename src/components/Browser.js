import React, {Component, PropTypes} from 'react';
import {getPopular} from '../actions/browserActions';

import BrowserSearch from './BrowserSearch';

const propTypes = {
    feeds: PropTypes.object
}

class Browser extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(getPopular());
    }

    render() {
        let {feeds} = this.props.browser || [];
        return (
           <div id="browser">
               <BrowserSearch {...this.props}/>
               <div id="feeds">
                   {feeds.map((feed) => {
                       return <div className="browser-box" key={feed.key}>
                           <img src={feed.pictures.medium} />
                           <span>{feed.user.name} - {feed.name}</span>
                       </div>
                   })}
               </div>
           </div>
       );
    }
}

Browser.propTypes = propTypes;

export default Browser;
