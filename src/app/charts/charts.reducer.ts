import { IChartsAction, IChartsState } from './charts.types';

const initialState: IChartsState = {
    streams: [],
    activeChartsType: 'popular/new',
    next: '',
    streamsLoaded: false
};

export default function(state: IChartsState = initialState, action: IChartsAction): IChartsState {
    switch (action.type) {
        case 'CHARTS_LOADING':
            return {
                ...state,
                streamsLoaded: false
            };
        case 'CHARTS_DATA': {
            const { next, shouldMerge } = action;
            const streams = shouldMerge ? [ ...state.streams, ...action.data ] : action.data;
            return {
                ...state,
                streams,
                next,
                streamsLoaded: true
            };
        }
        case 'CHARTS_ACTIVE_TYPE':
            return {
                ...state,
                activeChartsType: action.activeChartsType
            };
        default:
            return state;
    }
}
