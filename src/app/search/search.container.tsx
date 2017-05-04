import { connect } from 'react-redux';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { push } from 'react-router-redux';
import { searchAction } from './search.actions';
import Stream from '../common/stream.component';

class Search extends React.Component<any, any> {
    constructor(props: any) {
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

    public componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick, true);
    }

    public componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, true);
    }

    public search(e: React.ChangeEvent<any>) {
        e.persist();
        const { dispatch } = this.props;
        const target = e.target as HTMLInputElement;
        const query = target.value;
        const searcher = (searchQuery: string) => dispatch(searchAction(searchQuery));

        if (this.state.debouncer) {
            clearTimeout(this.state.debouncer);
        }

        if (query) {
            this.setState({
                debouncer : setTimeout(() => {
                    searcher(query);
                    this.setState({ debouncer: null, active: true });
                }, 1000)
            });
        } else {
            this.setClosed();
            this.setState({ debouncer: null, active: true });
        }
    }

    public setActive() {
        this.setState({ active: true });
    }

    public setClosed() {
        this.setState({ active: false });
    }

    /**
     * @param {Event} e
     */
    public handleOutsideClick(e: MouseEvent) {
        const domNode = ReactDom.findDOMNode(this);
        if (!domNode.contains(e.target as Node)) {
            this.setState({ active: false });
        }
    }

    public handleUserClick(name: string) {
        const { dispatch } = this.props;
        dispatch(push(`/user/${name}`));
        this.setClosed();
    }

    public render() {
        return (
            <div className='search-wrapper'>
                <div className='search-bar-icon-wrapper'>
                    { this.state.debouncer ?
                        <div className='loader-spinner'></div> :
                        <span className='material-icons search-bar-icon'>search</span>
                    }
                </div>
                <input
                    type='text'
                    className={'search-input' + ` ${this.state.active ? 'active' : ''}`}
                    onChange={ (e) => this.search(e) }
                    onClick={ this.setActive }
                    placeholder='Search' />
                {
                    this.state.active && (this.props.search.streams.length || this.props.search.users.length) ?
                    <div className='search-results'>
                        <div className='search-column'>
                            <div className='column-title'>Streams</div>
                            {
                                this.props.search.streams.map(
                                    (stream: any) => <Stream data={stream} key={stream.key} dispatch={this.props.dispatch} mini={true} />
                                )
                            }
                        </div>
                        <div className='search-column'>
                            <div className='column-title'>Users</div>
                            {
                                this.props.search.users.map(
                                    (user: any) =>
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

const mapState = (state: any) => {
    const { search } = state;
    return { search };
};

export default connect(mapState)(Search);
