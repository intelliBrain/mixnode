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

export const addToQueue = (stream) => ({
    type: 'QUEUE_ADD',
    stream
});

export const playerProgress = (progress, duration) => ({
    type: 'PLAYER_PROGRESS',
    progress,
    duration
});

export const playerNext = () => ({
    type: 'PLAYER_NEXT'
});

export const playerPrev = () => ({
    type: 'PLAYER_PREV'
});

export const loadQueue = (queueData) => ({
    type: 'QUEUE_LOAD',
    queueData: queueData
});

export const removeFromQueue = (id) => ({
    type: 'QUEUE_REMOVE',
    id
});

export const pausePlayer = () => ({
    type: 'PLAYER_PAUSE'
});

export const togglePlayer = () => ({
    type: 'PLAYER_TOGGLE'
});

export const seekPlayer = (seekTo) => ({
    type: 'PLAYER_SEEK',
    seekTo
});
