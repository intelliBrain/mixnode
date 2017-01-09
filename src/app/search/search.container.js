import { connect } from 'react-redux';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import history from 'react-router/lib/hashHistory';
import { searchAction } from './search.actions';
import Stream from '../common/stream.component';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            debouncer: null,
            active: false
        };
        this.search = this.search.bind(this);
        this.setActive = this.setActive.bind(this);
        this.setClosed = this.setClosed.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, true);
    }

    search (e) {
        e.persist();
        const { dispatch } = this.props;
        const query = e.target.value;
        let searcher = (searchQuery) => dispatch(searchAction(searchQuery));

        if (this.state.debouncer) {
            clearTimeout(this.state.debouncer);
        }

        if(query) {
            this.setState({
                debouncer : setTimeout(() => {
                    searcher(query);
                    this.setState({ debouncer: null, active: true });
                }, 1000)
            });
        } else {
            this.setClosed();
        }
    }

    setActive() {
        this.setState({ active: true });
    }

    setClosed() {
        this.setState({ active: false });
    }

    
    /**
     * @param {Event} e
     */
    handleOutsideClick(e) {
        const domNode = ReactDom.findDOMNode(this);
        if(!domNode.contains(e.target)) {
            this.setState({ active: false });
        }
    }

    handleUserClick(name) {
        history.push(`/user/${name}`);
        this.setClosed();
    }

    render () {
        return (
            <div className='search-wrapper'>
                { this.state.debouncer ? <div className='loader-spinner'></div> : null}
                <input
                    type='text'
                    className='search-input'
                    onChange={ this.search }
                    onClick={ this.setActive }
                    placeholder='Search' />
                {
                    this.state.active && (this.props.search.streams.length || this.props.search.users.length) ?
                    <div className='search-results'>
                        <div className='search-column'>
                            <div className='column-title'>Streams</div>
                            {
                                this.props.search.streams.map(
                                    (stream) => <Stream data={stream} key={stream.key} dispatch={this.props.dispatch} mini={true} />
                                )
                            }
                        </div>
                        <div className='search-column'>
                            <div className='column-title'>Users</div>
                            {
                                this.props.search.users.map(
                                    (user) =>
                                        <div
                                            className='user-result-wrapper'
                                            key={user.key}
                                            onClick={() => this.handleUserClick(user.username)}>
                                            <img src={ user.pictures.medium } className='user-result-img' />
                                            <span className='user-result-name'>
                                                { user.name }
                                            </span>
                                        </div>
                                )
                            }
                        </div>
                    </div>
                    : null
                }
            </div>
        );
    }
}

const mapState = (state) => {
    const { search } = state;
    return { search };
};

export default connect(mapState)(Search);
