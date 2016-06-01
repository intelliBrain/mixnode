import Axios from 'axios';

export function getPopular() {
    return (dispatch) => {
        Axios.get('//api.mixcloud.com/popular/').then(res => {
            dispatch(getPopularData(res.data.data));
            console.log(res);
        });
    }
}

export function getPopularData(data) {
    return {
        type: 'GET_POPULAR',
        data
    }
}
