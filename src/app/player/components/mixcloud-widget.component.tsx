import * as React from 'react';

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
        script.onload = (d) => d;
        document.body.appendChild(script);
        return script;
    }

    public postInitHook(widget: any) {
        const {
            initPlayer,
            playerNext,
            playerProgress,
            playerVolume
        } = this.props;

        widget.events.ended.on(() => playerNext());
        widget.events.progress.on((p: any) => playerProgress(p));
        widget.getVolume().then((vol: any) => playerVolume(vol));

        initPlayer(widget);
        return widget;
    }

    public render(): null {
        return null;
    }
}
