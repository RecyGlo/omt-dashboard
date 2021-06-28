import * as actionTypes from 'actions';

const initialState = {
    junk_shop_list: null
}

const junkShopReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.JUNK_SHOP_LIST: {
            let data = action.payload;
            console.log(data);
            return {
                ...state,
                junk_shop_list: data
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

export default junkShopReducer;
