import * as actionTypes from 'actions';

const initialState = {
    notification_list: null
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NOTIFICATION_LIST: {
            // return {
            //   ...initialState
            // };
            let data = action.payload;
            return {
                ...state,
                notification_list: data
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

export default notificationReducer;
