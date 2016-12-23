const {ipcRenderer} = require('electron');
import {connect} from 'react-redux';
import React, {Component} from 'react';
import Axios from 'axios';

import Header from './header/header.component';
import PlayerContainer from './player/player.container';

class AppContainer extends Component {
    componentDidMount () {
        ipcRenderer.on('user-log-in', (event, args) => {
            const token = args;
            // const { dispatch } = this.props;
            localStorage.setItem('token', args);
            Axios.get('https://api.mixcloud.com/me/feed/?access_token=' + token).then(
                // (res) => dispatch(addUserInfo(res.data))
                (res) => console.log(res.data)
            );
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
