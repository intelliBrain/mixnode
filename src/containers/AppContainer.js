import React, {Component} from 'react';

import Player from '../components/Player';
import Feed from '../components/Feed';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='mixnode'>
                <Feed />
                <Player />
            </div>
        );
    }
}

export default AppContainer;
