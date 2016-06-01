import Axios from 'axios';

export function getPopular() {
    return (dispatch) => {
        return Axios.get('//api.mixcloud.com/popular/').then(res => {
            dispatch(getPopularData(res.data.data));
        });
    }
}

export function getPopularData(data) {
    return {
        type: 'GET_POPULAR',
        data
    }
}
