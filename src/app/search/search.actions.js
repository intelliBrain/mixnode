import Axios from 'axios';

export const searchAction = (query) => {
    let getUsers = () => Axios.get(`https://api.mixcloud.com/search/?q=${query}&type=user`);
    let getShows = () => Axios.get(`https://api.mixcloud.com/search/?q=${query}&type=cloudcast`);
    if (query) {
        let queryString = query.split(' ');
        queryString = queryString.join('+');
        return (dispatch) => {
            Axios.all([getUsers(), getShows()]).then((res) => {
                dispatch(searchResults({
                    users: res[0].data.data,
                    streams: res[1].data.data 
                }));
            });
        };
    }
};

export function searchResults (data) {
    return {
        type: 'SEARCH_RESULTS',
        data
    };
}
