import { combineReducers } from 'redux';
import { LOGOUT, SET_USER_TOKEN } from '../action/loginAction';
import loginReducer from '../reducers/login';
// import loaderReducer from '../reducers/loader';
// import profileReducer from '../reducers/profile';
// import sidebarReducer from '../reducers/sidebar';
// import languageReducer from '../reducers/internationalization';
// import productsReducer from '../reducers/products';
import { removeToken } from '../utility';
// import usersReducer from '../reducers/users';
// import ProductGroupReducer from '../reducers/productManagement';
// import RoleReducer from '../reducers/roleManagement';
// import TargetReducer from '../reducers/targetManagement';
// import RoleNameReducer from '../reducers/salesPersonManagement';
// import CommissionsReducer from '../reducers/commissionManagement';

const initialState = {
  token: '',
  loaderCount: 0,
  profile: {},
  sidebar: { isCollapsed: false, isVisible: false },
  language: 'en-US',
};

const appReducer = combineReducers({
  token: loginReducer,
  // loaderCount: loaderReducer,
  // profile: profileReducer,
  // sidebar: sidebarReducer,
  // products: productsReducer,
  // users: usersReducer,
  // productGroup: ProductGroupReducer,
  // products: productsReducer,
  // users: usersReducer,
  // language: languageReducer,
  // role: RoleReducer,
  // roleName: RoleNameReducer,
  // target: TargetReducer,
  // productWiseReducer: CommissionsReducer,
});

const rootReducer = (state, action) => {
  let newState = state;
  if (
    action.type === LOGOUT ||
    (action.type !== SET_USER_TOKEN )
  ) {
    newState = initialState;
    removeToken();
  }
  return appReducer(newState, action);
};

export default rootReducer;
export { initialState };
