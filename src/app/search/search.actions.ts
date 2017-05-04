import Axios from 'axios';

export const searchAction = (query: string) => {
    const getUsers = () => Axios.get(`https://api.mixcloud.com/search/?q=${query}&type=user`);
    const getShows = () => Axios.get(`https://api.mixcloud.com/search/?q=${query}&type=cloudcast`);

    if (query) {
        // let queryString = query.split(' ');
        // queryString = queryString.join('+');
        return (dispatch: any) => {
            Axios.all([getUsers(), getShows()]).then((res) => {
                dispatch(searchResults({
                    users: res[0].data.data,
                    streams: res[1].data.data
                }));
            });
        };
    }
};

export function searchResults(data: any) {
    return {
        type: 'SEARCH_RESULTS',
        data
    };
}
