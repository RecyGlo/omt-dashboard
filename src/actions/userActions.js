import axios from 'axios'
import { user } from 'utils/endPoint'
// import { headers } from 'actions/headers'
// import { checkJWTExpire, refreshJWTToken } from 'actions/tokenAuthorization'
// import { history } from 'App';

export const USER_LIST = 'USER_LIST';
// export const SESSION_LOGOUT = 'SESSION_LOGOUT';

// const token = localStorage.getItem('token');
// console.log(token);

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTU4MzU5NDc0MSwiZXhwIjoxNTgzNjgxMTQxfQ.P3jya81kBY6Giykn1b3q24qWmrCswnUResZN_WYYPy0'

// const headers = {
//     'Content-Type': 'multipart/form-data',
//     // 'Access-Control-Allow-Credentials': true,
//     'Authorization': `Bearer ${token}`,

// }

// export const login = () => dispatch =>
//   dispatch({
//     type: USER_LIST
//   });

// export const logout = () => dispatch => {
// //   localStorage.removeItem('user');
// //   localStorage.removeItem('token');
// //   localStorage.removeItem('refreshToken');
//   dispatch({
//     type: SESSION_LOGOUT
//   })
//   history.push('/auth/login');

// }

export const get_user_list = () => dispatch => {
    // if (checkJWTExpire()) {
    //     await refreshJWTToken()
    // }

    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Credentials': true,
        'Authorization': `Bearer ${token}`,
    }
    axios.get(user, { headers })
        .then(function (response) {
            console.log(response);
            dispatch({
                type: USER_LIST,
                payload: response.data.data,
            })
        })
        .catch(function (error) {
            console.log(error);
        });

}


