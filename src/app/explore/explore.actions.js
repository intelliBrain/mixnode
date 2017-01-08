import Axios from 'axios';

export function getExplore (type) {
    return (dispatch) => {
        return Axios.get(`https://api.mixcloud.com/${type}/?limit=40`).then(res => {
            dispatch(addData(res.data.data));
        });
    };
}

export const addData = (data) => ({
    type: 'EXPLORE_ADD_DATA',
    data
});
