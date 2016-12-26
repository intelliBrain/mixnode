import {connect} from 'react-redux';
import React, {Component} from 'react';
import Axios from 'axios';

import Feed from '../common/feed.component';

class UserContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: null,
            userCloudcasts: []
        };
    }

    componentDidMount() {
        if(this.props.params.username === this.props.user.data.username) {
            this.setState({ userData: this.props.user.data });
        } else {
            this.getUserData(this.props.params.username);
        }
    }

    getUserData(username) {
        Axios.get(`//api.mixcloud.com/${username}/`).then(
            (res) => {
                this.setState({ userData: res.data });
                this.getUserCloudcasts(username);
            });
    }

    getUserCloudcasts(username) {
        Axios.get(`//api.mixcloud.com/${username}/cloudcasts/`).then((res) => this.setState({ userCloudcasts: res.data.data }));
    }

    render () {
        return (
            <div className='user-wrapper'>
                {this.state.userData ? `Cloudcasts from ${this.state.userData.username}` : null }
                {
                    this.state.userCloudcasts.map(cast => <Feed key={cast.key} data={cast} dispatch={this.props.dispatch} />)
                }
            </div>
        );
    }
}

function mapState(state) {
    const {user} = state;
    return {user};
}

export default connect(mapState)(UserContainer);
