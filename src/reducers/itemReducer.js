import * as actionTypes from 'actions';

const initialState = {
    item_list: null
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ITEM_LIST: {
            let data = action.payload;
            console.log(data);
            return {
                ...state,
                item_list: data
            };
        }

        // case actionTypes.SESSION_LOGOUT: {
        //     return {
        //         ...state,
        //         loggedIn: false,
        //         user: null
        //     };
        // }

        default: {
            return state;
        }
    }
};

export default itemReducer;
