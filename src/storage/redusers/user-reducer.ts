import { TUserActions } from "types/actions";
import { IS_LOADING, USER_AUTH_CHECK, USER_ERROR, USER_LOCAL_STORAGE, USER_LOGIN, USER_LOGOUT, USER_REFRESHTOKEN, USER_REGISTER } from "../action-types";
import { TUserState } from "types/reducers";
import { USER_AUTHENTICATION } from "utils/constants";

const initialState: TUserState = {
    isAuthChecked: false,
    data: null,
    loading: false,
    error: null,
    authorization: ''
}

export function userReducer(state = initialState, action:TUserActions) {

    switch (action.type) {
        case USER_REGISTER: 
            return {...state, authorization: action.payload}
        case USER_LOGIN:            
            return {...state, data: action.payload, isAuthChecked:true, error: null, authorization: USER_AUTHENTICATION}
        case USER_LOCAL_STORAGE:            
            return {...state, data: action.payload}
         case USER_REFRESHTOKEN:
            return {...state, data: action.payload, isAuthChecked:true, error: null, authorization: USER_AUTHENTICATION}
        case USER_LOGOUT:           
            return {...state, data: null, isAuthChecked: false, authorization: ''}
        case USER_AUTH_CHECK:
            return {...state, isAuthChecked: true}
        case USER_ERROR:
            return {...state, error: action.payload}
        case IS_LOADING:
            return {...state, loading: action.payload}
        default:
            return state
    }
}