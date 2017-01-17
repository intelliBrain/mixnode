export const initPlayer = (playerWidget) => ({
    type: 'PLAYER_INIT',
    playerWidget
});

export const loadStream = (stream, autoplay) => {
    return {
        type: 'PLAYER_LOAD',
        stream,
        autoplay
    };
};


export const playerProgress = (progress) => ({
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

export const playerSeek = (seekTo) => ({
    type: 'PLAYER_SEEK',
    seekTo
});

export const playerVolume = (volume) => ({
    type: 'PLAYER_SET_VOLUME',
    volume
});


export const loadQueue = (queueData) => ({
    type: 'QUEUE_LOAD',
    queueData: queueData
});

export const removeFromQueue = (id) => ({
    type: 'QUEUE_REMOVE',
    id
});

export const addToQueue = (stream) => ({
    type: 'QUEUE_ADD',
    stream
});
