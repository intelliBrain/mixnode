import Axios from 'axios';
import { IChartsAction } from './charts.types';

export const addChartsData = (data: any): IChartsAction => ({
    type: 'CHARTS_DATA',
    data
});

export const getChartsByType = (type: any) =>
    (dispatch: any) =>
        Axios.get(`https://api.mixcloud.com/${type}/?limit=40`)
            .then((res: any) => dispatch(addChartsData(res.data.data)));
