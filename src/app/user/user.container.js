import {connect} from 'react-redux';
import React, {Component} from 'react';
import Axios from 'axios';

import Stream from '../common/stream.component';

class UserContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: null,
            userCloudcasts: []
        };
    }

    componentDidMount() {
        const { get } = require('lodash');
        if(this.props.routeParams.username === get(this.props.user, 'data.username')) {
            this.setState({ userData: this.props.user.data });
        } else {
            this.getUserData(this.props.params.username);
        }
    }

    componentWillReceiveProps(next) {
        if(next.params.username !== this.props.params.username) {
            this.getUserData(next.params.username);
        }
    }

    getUserData(username) {
        Axios.get(`https://api.mixcloud.com/${username}/`).then(
            (res) => {
                this.setState({ userData: res.data });
                this.getUserCloudcasts(username);
            });
    }

    getUserCloudcasts(username) {
        Axios.get(`https://api.mixcloud.com/${username}/cloudcasts/`).then((res) => this.setState({ userCloudcasts: res.data.data }));
    }

    render () {
        let user = this.state.userData ? { ...this.state.userData } : null;
        if(user) {
            return (
                <div className='user-wrapper'>
                    <div className='user-bio-block'>
                        <img className='user-bio-img' src={user.pictures.large} />
                        <div className='user-bio-biog'>
                            <div className='biog-title'>
                                { user.name }
                            </div>
                            <div className='biog-text'>
                                { user.biog }
                            </div>
                        </div>
                    </div>
                    <div className='user-data-list'>
                        {
                            this.state.userCloudcasts.map(cast => 
                                <Stream
                                    key={cast.key}
                                    data={cast} 
                                    dispatch={this.props.dispatch} />
                            )
                        }
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

function mapState(state) {
    const {user} = state;
    return {user};
}

export default connect(mapState)(UserContainer);
