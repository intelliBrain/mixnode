import lodash from 'lodash';

const initialState = {
    playerWidget: null,
    currentStream: { id: null, key: '/spartacus/party-time/'},
    status: {
        playing: false,
        volume: 1,
        progress: 0
    },
    queue: []
};

export default function player (state = initialState, action) {
    switch (action.type) {
        case 'PLAYER_INIT': {
            return {
                ...state,
                playerWidget: action.playerWidget
            };
        }
        // PLAYER WIDGET
        case 'PLAYER_LOAD': {
            state.playerWidget.load(action.stream.key, action.autoplay);
            return {
                ...state,
                currentStream: action.stream,
                status: {
                    ...state.status,
                    playing: action.autoplay
                }
            };
        }
        case 'PLAYER_PAUSE':  {
            state.playerWidget.pause();
            return {
                ...state,
                status: {
                    ...state.status,
                    playing: false
                }
            };
        }
        case 'PLAYER_PLAY':  {
            state.playerWidget.play();
            return {
                ...state,
                status: {
                    ...state.status,
                    playing: true
                }
            };
        }
        case 'PLAYER_SEEK':  {
            state.playerWidget.seek(action.seekTo);
            return {
                ...state,
                status: {
                    ...state.status,
                    progress: action.seekTo
                }
            };
        }
        case 'PLAYER_PROGRESS': {
            return {
                ...state,
                status: {
                    ...state.status,
                    progress: action.progress
                }
            };
        }
        case 'PLAYER_SET_VOLUME': {
            state.playerWidget.setVolume(action.volume);
            return {
                ...state,
                status: {
                    ...state.status,
                    volume: action.volume
                }
            };
        }
        case 'PLAYER_NEXT':  {
            const currentStreamIndex = lodash.findIndex(state.queue, (stream) => stream.id === state.currentStream.id);

            if(currentStreamIndex > -1 && state.queue[currentStreamIndex + 1]) {
                const nextStream = state.queue[currentStreamIndex + 1];

                state.playerWidget.load(nextStream.key, true);
                return {
                    ...state,
                    currentStream : nextStream
                };
            }

            return state;
        }
        case 'PLAYER_PREV':  {
            const currentStreamIndex = lodash.findIndex(state.queue, (stream) => stream.id === state.currentStream.id);

            if(currentStreamIndex > -1 && state.queue[currentStreamIndex - 1]) {
                const nextStream = state.queue[currentStreamIndex - 1];

                state.playerWidget.load(nextStream.key, true);
                return {
                    ...state,
                    currentStream : nextStream
                };
            }
            return state;
        }
        // QUEUE
        case 'QUEUE_ADD': {
            let { queue } = state;
            action.stream.id = Date.now();
            queue = [...queue, action.stream];
            localStorage.setItem('queueData', JSON.stringify(queue));

            return {
                ...state,
                queue
            };
        }
        case 'QUEUE_REMOVE': {
            const newQueue = lodash.filter(state.queue, (stream) => stream.id !== action.id);
            localStorage.setItem('queueData', newQueue);
            return {
                ...state,
                queue: newQueue
            };
        }
        case 'QUEUE_LOAD':
            return {
                ...state,
                queue: action.queueData
            };
        default: 
            return state;
    }
}
