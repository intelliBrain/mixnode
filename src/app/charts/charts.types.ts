import { Action, Dispatch } from 'redux';
import { ConnectedRouterProps } from 'react-router-redux';

export interface IChartsAction {
    type: string;
    data: any;
}

export interface IChartsState {
    streams: Array<any>;
}

export interface IChartsProps extends ConnectedRouterProps<any> {
    match: any;
    charts: IChartsState;
    dispatch: Dispatch<any>;
    getCharts: (type: string) => Promise<any>;
    addToQueue: (stream: any) => any;
    loadStream: (stream: any) => any;
}
