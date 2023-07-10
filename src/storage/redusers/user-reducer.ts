import { USER_CHECKTOKEN, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "storage/types"

export type TUserDTO = {
    email: string,
    name: string,

}

export type TUserState = {
    isAuthChecked: boolean,
    data: TUserDTO | null
}

const initialState: TUserState = {
    isAuthChecked: false,
    data: null
}

export function userReducer(state = initialState, action:any) {
    switch (action.type) {
        case USER_REGISTER:
            return {...state}
        case USER_LOGIN:
            return {...state}
        case USER_CHECKTOKEN:
            return {...state}
        case USER_LOGOUT:
            return {...state}
    
        default:
            return state
    }
}