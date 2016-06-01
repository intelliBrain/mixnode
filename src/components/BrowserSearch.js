import React, {Component, PropTypes} from 'react';
import {searchFeeds} from '../actions/browserActions';

const propTypes = {
    feeds: PropTypes.object
}

class BrowserSearch extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            debouncer: null
        };
        this.searchFeeds = this.searchFeeds.bind(this)
    }

    searchFeeds(event) {
        event.persist();
        const {dispatch} = this.props;
        let searcher = (query) => {
            dispatch(searchFeeds(query));
        };
        if(this.state.debouncer){
            clearTimeout(this.state.debouncer);
        }
        this.state.debouncer = setTimeout(() => searcher(event.target.value), 1000);
    }

    render() {
        return(
            <div id="browser-search">
                <input className="browser-search-input" type="text" placeholder="Search" onChange={this.searchFeeds} />
            </div>
        )
    }
}

BrowserSearch.propTypes = propTypes;

export default BrowserSearch;
