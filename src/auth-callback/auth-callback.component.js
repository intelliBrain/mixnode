import {ipcRenderer} from 'electron';
import React, {Component} from 'react';
import Axios from 'axios';

class authCallback extends Component {
    componentDidMount() {
        const code = document.location.href.split('code=')[1];
        let url = `https://beta.mixcloud.com/oauth/access_token?client_id=${process.env.MIXNODE_ID}&redirect_uri=${document.location.origin}/callback&client_secret=${process.env.MIXNODE_SECRET}&code=${code}`;
        Axios.get(url).then((res) => {
            ipcRenderer.send('oauth-token', res.data.access_token);
        });
    }

    render () {

        return (
            <div>
                Callback
            </div>
        );
    }
}

export default authCallback;
