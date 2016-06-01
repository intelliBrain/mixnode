import React, {Component, PropTypes} from 'react';
import {getPopular} from '../actions/browserActions';

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
               {feeds.map((feed) => {
                   return <div className="browser-box" key={feed.key}>{feed.name}</div>
               })}
           </div>
       );
    }
}

Browser.propTypes = propTypes;

export default Browser;
