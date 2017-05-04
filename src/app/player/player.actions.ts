export const initPlayer = (playerWidget: any) => ({
    type: 'PLAYER_INIT',
    playerWidget
});

export const loadStream = (stream: any, autoplay?: boolean) => {
    return {
        type: 'PLAYER_LOAD',
        stream,
        autoplay
    };
};

export const playerProgress = (progress: any) => ({
    type: 'PLAYER_PROGRESS',
    progress
});

export const playerNext = () => ({
    type: 'PLAYER_NEXT'
});

export const playerPrev = () => ({
    type: 'PLAYER_PREV'
});

export const playerPlay = () => ({
    type: 'PLAYER_PLAY'
});

export const playerPause = () => ({
    type: 'PLAYER_PAUSE'
});

export const playerSeek = (seekTo: number) => ({
    type: 'PLAYER_SEEK',
    seekTo
});

export const playerVolume = (volume: number) => ({
    type: 'PLAYER_SET_VOLUME',
    volume
});

export const loadQueue = (queueData: any) => ({
    type: 'QUEUE_LOAD',
    queueData
});

export const removeFromQueue = (id: number) => ({
    type: 'QUEUE_REMOVE',
    id
});

export const addToQueue = (stream: any) => ({
    type: 'QUEUE_ADD',
    stream
});
