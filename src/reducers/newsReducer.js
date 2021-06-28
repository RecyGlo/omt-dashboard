import * as actionTypes from 'actions';

const initialState = {
    news_list: null
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NEWS_LIST: {
            let data = action.payload;
            console.log(data);
            return {
                ...state,
                news_list: data
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

export default newsReducer;
