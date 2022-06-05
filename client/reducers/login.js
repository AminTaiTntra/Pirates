import { SET_USER_TOKEN } from '../action/loginAction';


export const INITIAL_STATE = {
  token: '',
  userDetails: ''
};


const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_TOKEN: {
      return { ...state, token: action.payload, userDetails: action.userDetails };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
