const {ipcRenderer} = require('electron');
import {connect} from 'react-redux';
import React, {Component} from 'react';
import Axios from 'axios';

import { logIn } from './user/user.actions';
import Header from './header/header.component';
import PlayerContainer from './player/player.container';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.registerAuthListener = this.registerAuthListener.bind(this);
        this.mixcloudLogIn = this.mixcloudLogIn.bind(this);
    }

    componentDidMount () {
        this.registerAuthListener();
        if(localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            this.mixcloudLogIn(token);
        }
    }

    mixcloudLogIn(token) {
        const { dispatch } = this.props;
        Axios.get('https://api.mixcloud.com/me/?access_token=' + token).then(
            (res) => dispatch(logIn(res.data, token)),
            (err) => { throw new Error(err); }
        );
    }

    registerAuthListener() {
        ipcRenderer.on('user-log-in', (event, args) => {
            const token = args;
            localStorage.setItem('token', token);
            this.mixcloudLogIn(token);
        });
    }

    render () {
        return (
            <div id='mixnode'>
                <Header />
                <div className='content-wrapper'>
                    {this.props.children}
                </div>
                <PlayerContainer />
            </div>
        );
    }
}

function mapState (state) {
    const {explore, player, user} = state;
    return {explore, player, user};
}

export default connect(mapState)(AppContainer);
