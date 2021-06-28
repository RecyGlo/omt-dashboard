import * as actionTypes from 'actions';

let current_user = JSON.parse(localStorage.getItem('user'));
const initialState = current_user ?
  {
    loggedIn: true,
    user: {
      first_name: current_user.name,
      last_name: '',
      email: current_user.email,
      avatar: current_user.profileImage,
      bio: current_user.phoneNumber,
      role: current_user.type
    }
  }
  :
  {
    loggedIn: false,
    user: null

  };

// const initialState = {
//   loggedIn: true,
//   user: {
//     first_name: 'Shen',
//     last_name: 'Zhi',
//     email: 'demo@devias.io',
//     avatar: '/images/avatars/avatar_11.png',
//     bio: 'Brain Director',
//     role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
//   }
//   // user: null
// };

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SESSION_LOGIN: {
      // return {
      //   ...initialState
      // };
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
      localStorage.setItem('user', JSON.stringify(action.payload.data));
      let data = action.payload.data;
      let user = {
        first_name: data.name,
        last_name: '',
        email: data.email,
        avatar: data.profileImage,
        bio: data.phoneNumber,
        role: data.type
      }
      return {
        ...state,
        loggedIn: true,
        user: user
      };
    }

    case actionTypes.SESSION_LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        user: null
      };
    }

    default: {
      return state;
    }
  }
};

export default sessionReducer;
