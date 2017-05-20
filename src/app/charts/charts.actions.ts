import Axios from 'axios';
import { IChartsAction } from './charts.types';

export const setActiveChartsType = (type: string): IChartsAction => ({
    type: 'CHARTS_ACTIVE_TYPE',
    activeChartsType: type
});

export const addChartsData = (data: any, shouldMerge?: boolean): IChartsAction => ({
    type: 'CHARTS_DATA',
    data: data.data,
    next: data.paging.next,
    shouldMerge
});

export const chartsLoading = (): IChartsAction => ({
    type: 'CHARTS_LOADING'
});

export const getChartsByType = (type: any) =>
    (dispatch: any) => {
        dispatch(chartsLoading());
        return Axios.get(`https://api.mixcloud.com/${type}/?limit=20`)
            .then((res: any) => {
                const { data } = res;
                dispatch(addChartsData(data));
                dispatch(setActiveChartsType(type));
            });
    };

export const getChartsNextPage = (link: string) =>
    (dispatch: any) => {
        dispatch(chartsLoading());
        return Axios.get(link)
            .then((res: any) =>
                dispatch(addChartsData(res.data, true))
            );
    };
