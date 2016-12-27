import { connect } from 'react-redux';
import { Component } from 'react';

import { initPlayer, pausePlayer } from './player.actions';

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
        this.addWidgetScript().onload = () => 
            Mixcloud.FooterWidget('/spartacus/lambiance/', { disablePushstate: true, disableUnloadWarning: false, light: false }).then(
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
