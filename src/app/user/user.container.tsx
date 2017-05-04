import {connect} from 'react-redux';
import { RouteComponentProps } from 'react-router';
import * as React from 'react';
import Axios from 'axios';

import Stream from '../common/stream.component';

interface IProps extends RouteComponentProps<any> {
    user: any;
    dispatch: any;
}

class UserContainer extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            userData: null,
            userCloudcasts: []
        };
    }

    public componentDidMount() {
        const { get } = require('lodash');
        if (this.props.match.params.username === get(this.props.user, 'data.username')) {
            this.setState({ userData: this.props.user.data });
        } else {
            this.getUserData(this.props.match.params.username);
        }
    }

    public componentWillReceiveProps(next: any) {
        if (next.match.params.username !== this.props.match.params.username) {
            this.getUserData(next.match.params.username);
        }
    }

    public getUserData(username: string) {
        Axios.get(`https://api.mixcloud.com/${username}/`).then(
            (res) => {
                this.setState({ userData: res.data });
                this.getUserCloudcasts(username);
            });
    }

    public getUserCloudcasts(username: string) {
        Axios.get(`https://api.mixcloud.com/${username}/cloudcasts/`).then((res) => this.setState({ userCloudcasts: res.data.data }));
    }

    public render() {
        const user = this.state.userData ? { ...this.state.userData } : null;
        if (user) {
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
                            <div className='biog-statistics'>
                                <div className='biog-stat'>
                                    <i className='material-icons'>cloud_queue</i>
                                    <span>{ user.cloudcast_count }</span>
                                </div>
                                <div className='biog-stat'>
                                    <i className='material-icons'>group</i>
                                    <span>{ user.follower_count }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='user-data-list'>
                        {
                            this.state.userCloudcasts.map((cast: any) =>
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

function mapState(state: any) {
    const {user} = state;
    return {user};
}

export default connect(mapState)(UserContainer);
