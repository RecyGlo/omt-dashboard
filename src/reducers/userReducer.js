import * as actionTypes from 'actions';

const initialState = {
    user_list: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LIST: {
            // return {
            //   ...initialState
            // };
            let data = action.payload;
            console.log(data);
            return {
                ...state,
                user_list: data
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

export default userReducer;
