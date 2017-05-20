import { getChartsNextPage } from './charts.actions';
import { Action, Dispatch } from 'redux';
import { ConnectedRouterProps } from 'react-router-redux';

export interface IChartsAction {
    type: string;
    data?: any;
    activeChartsType?: string;
    next?: string;
    shouldMerge?: boolean;
}

export interface IChartsState {
    streams: Array<any>;
    activeChartsType: string;
    streamsLoaded: boolean;
    next: string;
}

export interface IChartsProps extends ConnectedRouterProps<any> {
    match: any;
    charts: IChartsState;
    dispatch: Dispatch<any>;
    getCharts: (type: string) => Promise<any>;
    getChartsNextPage: (type: string) => Promise<any>;
    addToQueue: (stream: any) => any;
    loadStream: (stream: any) => any;
}

export const chartTypes = [
    {
        name: 'Hot',
        key: 'popular/hot'
    },
    {
        name: 'Popular',
        key: 'popular'
    },
    {
        name: 'New',
        key: 'new'
    }
];
