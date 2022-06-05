import { login } from '../api/loginManagemnet';
import { saveToken, showToast } from '../utility';

const SET_USER_TOKEN = 'SET_USER_TOKEN';
const LOGOUT = 'LOGOUT';

const setUserToken = (body) => (dispatch) => {
  return login(body).then((res) => {
    if (res.data.success === true) {
      let token = res.headers.authorization;
      saveToken(token);
      dispatch({
        type: SET_USER_TOKEN,
        payload: token,
        userDetails: res?.data?.user
      });
    }
    showToast(res?.data?.message)
    return res;
  });
};

// const logout = () => {
//   return (dispatch) => {
//     dispatch({ type: LOGOUT, payload: {} });
//   };

const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT, payload: {} });
    localStorage.removeItem('TOKEN');
    dispatch({
      type: LOGOUT, payload: {}
    });
  };
};


export { setUserToken, logout, SET_USER_TOKEN, LOGOUT };
