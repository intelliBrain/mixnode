import Axios from 'axios';

export function getPopular () {
    return (dispatch) => {
        return Axios.get('//api.mixcloud.com/popular/?limit=40').then(res => {
            dispatch(addData(res.data.data));
        });
    };
}

export const addData = (data) => ({
    type: 'EXPLORE_ADD_DATA',
    data
});
