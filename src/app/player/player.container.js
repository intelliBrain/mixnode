import { connect } from 'react-redux';
import { Component } from 'react';

import { initPlayer } from './player.actions';

class Player extends Component {
    constructor (props) {
        super(props);
        this.addWidgetScript = this.addWidgetScript.bind(this);
        this.initPlayer = this.initPlayer.bind(this);
    }

    componentDidMount() {
        this.initPlayer();
    }

    initPlayer() {
        let song = localStorage.getItem('lastPlayed') || '/spartacus/lambiance/';
        this.addWidgetScript().onload = () => 
            Mixcloud.FooterWidget(song, { disablePushstate: true, disableUnloadWarning: true, light: false }).then(
                (widget) => {
                    const {dispatch} = this.props;
                    dispatch(initPlayer(widget));
                }
            );
    }

    addWidgetScript () {
        let script = document.createElement('script');
        script.src = 'https://widget.mixcloud.com/media/js/footerWidgetApi.js';
        document.body.appendChild(script);
        return script;
    }

    render () {
        return null;
    }
}

function mapState (state) {
    const {player} = state;
    return {player};
}

export default connect(mapState)(Player);
