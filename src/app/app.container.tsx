const {ipcRenderer} = require('electron');
import {connect} from 'react-redux';
import * as React from 'react';
import { Route } from 'react-router';
import Axios from 'axios';

import { logIn } from './user/user.actions';
import Charts from './charts/charts.container';
import User from './user/user.container';
import Header from './header/header.component';
import Sidebar from './sidebar/sidebar.container';
import PlayerContainer from './player/player.container';

export class AppContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.registerAuthListener = this.registerAuthListener.bind(this);
        this.bootstrapUser = this.bootstrapUser.bind(this);
    }

    public componentDidMount() {
        this.registerAuthListener();
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            this.bootstrapUser(token);
        }
    }

    public bootstrapUser(token: string) {
        const { dispatch } = this.props;
        Axios.get('https://api.mixcloud.com/me/?access_token=' + token).then(
            (res) => dispatch(logIn(res.data, token)),
            (err) => { throw new Error(err); }
        );
    }

    public registerAuthListener() {
        ipcRenderer.on('user-log-in', (event, args) => {
            const token = args;
            localStorage.setItem('token', token);
            this.bootstrapUser(token);
        });
    }

    public render() {
        return (
            <div id='mixnode'>
                <Header />
                <div className='content-wrapper'>
                    <Sidebar />
                    <div className='content-view'>
                        <Route path='/' exact component={ Charts as any } />
                        <Route path='/user/:username' component={ User as any } />
                    </div>
                </div>
                <PlayerContainer />
            </div>
        );
    }
}

const mapState = (state: any) => {
    const { user, router } = state;
    return { user, router };
};

export default connect(mapState)(AppContainer);
