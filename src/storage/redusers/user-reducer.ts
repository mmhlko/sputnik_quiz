import { User } from "@supabase/supabase-js"
import { TRegisterAction } from "storage/actions/user-actions"
import { USER_AUTH_CHECK, USER_CHECKTOKEN, USER_LOCAL_STORAGE, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "../types"



export type TUserState = {
    isAuthChecked: boolean,
    data: User | null
}

const initialState: TUserState = {
    isAuthChecked: false,
    data: null
}

export function userReducer(state = initialState, action:TRegisterAction) {

    switch (action.type) {
        case USER_REGISTER:
            return {...state, data: action.payload}
        case USER_LOGIN:            
            return {...state, data: action.payload, isAuthChecked:true}
        case USER_LOCAL_STORAGE:            
            return {...state, data: action.payload}
        case USER_CHECKTOKEN:
            return {...state, data: action.payload}
        case USER_LOGOUT:           
            return {...state, data: null, isAuthChecked: false}
        case USER_AUTH_CHECK:
            return {...state, isAuthChecked: true}
        default:
            return state
    }
}