import * as React from 'react';

import { playerNext, initPlayer, playerProgress, playerVolume } from '../player.actions';

export default class PlayerWidget extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.initPlayer = this.initPlayer.bind(this);
        this.addWidgetScript = this.addWidgetScript.bind(this);
        this.postInitHook = this.postInitHook.bind(this);
    }

    public initPlayer() {
        return new Promise((resolve, reject) => {
            const initStream = this.props.player.currentStream;

            const widgetOptions = {
                disablePushstate: true,
                disableUnloadWarning: true
            };

            const playerWidget = this.addWidgetScript();
            playerWidget.onload = (e: any) =>
                Mixcloud.FooterWidget(initStream.key, widgetOptions).then(
                    (widget: any) => resolve(this.postInitHook(widget)),
                    (err: Error) => reject(err)
                );
        });
    }

    public addWidgetScript() {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://widget.mixcloud.com/media/js/footerWidgetApi.js';
        script.onload = (d) => {
            return d;
        };
        document.body.appendChild(script);
        return script;
    }

    public postInitHook(widget: any) {
        const { dispatch } = this.props;

        widget.events.ended.on(() => dispatch(playerNext()));
        widget.events.progress.on((p: any) => dispatch(playerProgress(p)));
        widget.getVolume().then((vol: any) => dispatch(playerVolume(vol)));

        dispatch(initPlayer(widget));
        return widget;
    }

    public render(): null {
        return null;
    }
}
