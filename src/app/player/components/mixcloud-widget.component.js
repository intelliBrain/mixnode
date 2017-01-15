import { Component } from 'react';

import { playerNext, initPlayer, playerProgress } from '../player.actions';

export default class PlayerWidget extends Component {
    constructor(props) {
        super(props);

        this.initPlayer = this.initPlayer.bind(this);
        this.addWidgetScript = this.addWidgetScript.bind(this);
        this.registerEvents = this.registerEvents.bind(this);
    }

    initPlayer() {
        return new Promise((resolve, reject) => { 
            let initStream = this.props.player.currentStream;

            const widgetOptions = {
                disablePushstate: true,
                disableUnloadWarning: true
            };

            const playerWidget = this.addWidgetScript(initStream.key, widgetOptions);
            playerWidget.onload = () =>
                Mixcloud.FooterWidget(initStream.key, widgetOptions).then(
                    (widget) => resolve(this.registerEvents(widget)),
                    (e) => reject(e)
                );
        });
    }

    addWidgetScript () {
        let script = document.createElement('script');
        script.async = true;
        script.src = 'https://widget.mixcloud.com/media/js/footerWidgetApi.js';
        document.body.appendChild(script);
        return script;
    }

    registerEvents(widget) {
        const { dispatch } = this.props;

        widget.events.ended.on(() => dispatch(playerNext()));
        widget.events.progress.on((p, d) => dispatch(playerProgress(p, d)));

        dispatch(initPlayer(widget));
        return widget;
    }

    render() {
        return null;
    }
}
