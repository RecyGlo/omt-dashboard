import axios from 'axios'
import jwtDecode from 'jwt-decode';
import { refresh_token } from 'utils/endPoint'
// import { headers } from 'actions/headers'

const token = localStorage.getItem('token');
const current_refresh_token = localStorage.getItem('refreshToken');

export const refreshJWTToken = () => {

    // axios({
    //     method: 'post',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Credentials': true,
    //         //   withCredentials: false,
    //         //   mode: 'no-cors',
    //     },
    //     url: refresh_token_url,
    //     data: { current_refresh_token },
    // })

    const data = {
        refreshToken: current_refresh_token
    }
    axios.post(refresh_token, data, {
        header: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
        }
    })
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                localStorage.setItem('refreshToken', response.data.token);
            } else {
                window.alert('SERVER ERROR FOUND');
            }
        })
        .catch((error) => {
            console.log(error);
            window.alert(error);
        });
};

export const checkJWTExpire = () => {
    console.log('hello', token);
    const { exp } = jwtDecode(token);
    if (exp > new Date().getTime() / 1000) {
        return false;
    }
    return true;
};