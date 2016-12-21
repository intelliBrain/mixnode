import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './header/header.component';
import PlayerContainer from './player/player.container';

class AppContainer extends Component {
    componentDidMount () {
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
