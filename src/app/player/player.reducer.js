import lodash from 'lodash';

const initialState = {
    playerWidget: null,
    currentStream: { id: null, key: '/spartacus/party-time/'},
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
                currentStream: action.stream
            };
        }
        case 'PLAYER_PAUSE':  {
            state.playerWidget.pause();
            return state;
        }
        case 'PLAYER_TOGGLE':  {
            state.playerWidget.togglePlay();
            return state;
        }
        case 'PLAYER_SEEK':  {
            state.playerWidget.seek(action.seekTo);
            return state;
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
