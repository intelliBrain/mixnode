import React, {Component} from 'react';
import { searchFeeds } from '../../explore/explore.actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            debouncer: null
        };
        this.searchFeeds = this.searchFeeds.bind(this);
    }

    searchFeeds (event) {
        event.persist();
        const { dispatch } = this.props;
        let searcher = (query) => dispatch(searchFeeds(query));

        if (this.state.debouncer) {
            clearTimeout(this.state.debouncer);
        }

        this.setState({
            debouncer : setTimeout(() => {
                searcher(event.target.value);
                this.setState({ debouncer: null });
            }, 1000)
        });

    }

    render () {
        return (
            <div className='search-bar-wrapper'>
                { this.state.debouncer ? <div className='loader-spinner'></div> : null}
                <input
                    type='text'
                    className='search-bar-input'
                    onChange={ this.searchFeeds }
                    placeholder='Search' />
            </div>
        );
    }
}

export default SearchBar;
