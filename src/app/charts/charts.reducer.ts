import { IChartsAction, IChartsState } from './charts.types';

const initialState: IChartsState = {
    streams: []
};

export default function(state: IChartsState = initialState, action: IChartsAction): IChartsState {
    switch (action.type) {
        case 'CHARTS_DATA':
            return {
                ...state,
                streams: action.data
            };
        default:
            return state;
    }
}
