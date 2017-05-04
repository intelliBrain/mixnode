import { ThunkAction } from 'redux-thunk';
import { ActionCreator } from 'redux';
import Axios from 'axios';

export function getExplore(type: any): ThunkAction<{}, {}, {}> {
    return (dispatch: any) => {
        return Axios.get(`https://api.mixcloud.com/${type}/?limit=40`).then((res: any) =>
            dispatch(addData(res.data.data))
        );
    };
}

export const addData = (data: any) => ({
    type: 'EXPLORE_ADD_DATA',
    data
});
