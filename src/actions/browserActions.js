import Axios from 'axios';

export function getPopular() {
    return (dispatch) => {
        return Axios.get('//api.mixcloud.com/popular/?limit=40').then(res => {
            dispatch(getFeeds(res.data.data));
        });
    }
}

export function searchFeeds(query){
    if(!query){
        return {};
    }
    let queryString = query.split(' ');
    queryString = queryString.join('+');
    return (dispatch) => {
        return Axios.get('//api.mixcloud.com/search/?q=' + queryString + '&type=cloudcast').then(res => {
            dispatch(getFeeds(res.data.data));
        });
    }
}


export function getFeeds(data) {
    return {
        type: 'GET_FEEDS',
        data
    }
}
