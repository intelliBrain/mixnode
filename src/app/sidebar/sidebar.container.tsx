import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { push } from 'react-router-redux';

class Sidebar extends React.Component<any, any> {
    public linkClass(url: string) {
        const { pathname } = this.props.router.location;
        return `sidebar-icon-wrapper ${pathname === url ? 'active' : 'null'}`;
    }

    public render() {
        return (
            <div className='sidebar-wrapper'>
                <div className='sidebar-list'>
                    <a className={this.linkClass('/')} onClick={() => this.props.navigate('/')} >
                        <span className='material-icons sidebar-icon'>poll</span>
                    </a>
                    <a className='sidebar-icon-wrapper disabled'>
                        <span className='material-icons sidebar-icon'>explore</span>
                    </a>
                    {
                        this.props.user.loggedIn &&
                        <div className='sidebar-list__restricted'>
                            <a className='sidebar-icon-wrapper'>
                                <span className='material-icons sidebar-icon'>favorite_border</span>
                            </a>
                            <a className='sidebar-icon-wrapper'>
                                <span className='material-icons sidebar-icon'>watch_later</span>
                            </a>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const mapState = (state: any) => {
    const { user, router } = state;
    return { user, router };
};

const mapDispatch = (dispatch: Dispatch<any>) => ({
    navigate: (url: string) => dispatch(push(url))
});

export default connect(mapState, mapDispatch)(Sidebar);
