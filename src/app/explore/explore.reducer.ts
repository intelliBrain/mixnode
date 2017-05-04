const initialState: any = {
    data: []
};

export default function explore(state = initialState, action: any) {
    switch (action.type) {
        case 'EXPLORE_ADD_DATA':
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}
