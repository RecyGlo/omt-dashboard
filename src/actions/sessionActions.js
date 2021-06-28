import axios from 'axios'
import { log_in } from 'utils/endPoint'
// import useRouter from 'utils/useRouter'
// import { history } from 'App';


export const SESSION_LOGIN = 'SESSION_LOGIN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

// export const login = () => dispatch =>
//   dispatch({
//     type: SESSION_LOGIN
//   });

// const { history } = useRouter();


export const logout = () => dispatch => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  localStorage.removeItem('refreshToken');
  dispatch({
    type: SESSION_LOGOUT,
  })
  // history.push('/auth/login');

}

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Credentials': true,
}





export const login = (data) => dispatch => {
  axios.post(log_in, data, headers)
    .then(function (response) {
      // console.log(response);
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('refreshToken', response.data.refreshToken);
      // localStorage.setItem('user', JSON.stringify(response.data.data));
      dispatch({
        type: SESSION_LOGIN,
        payload: response.data,
      })
      // history.push('/dashboard');
    })
    .catch(function (error) {
      console.log(error);
    });

}


