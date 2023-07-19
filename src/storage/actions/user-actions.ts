import { User } from "@supabase/supabase-js"
import { USER_AUTH_CHECK, USER_LOCAL_STORAGE, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "../types"



export type TRegisterAction = {
    type: string,
    payload?: User
}

export type TAuthAction = {
    type: string,
    payload?: User
}

export function registerAction(data:User):TRegisterAction {
    return {
        type: USER_REGISTER,
        payload: data,
    }
}

export function authorizeAction(data:User):TAuthAction {
    return {
        type: USER_LOGIN,
        payload: data,
    }
}

export function getUser(data:User):TAuthAction {
    return {
        type: USER_LOCAL_STORAGE,
        payload: data,
    }
}

export function userLogout() {
    return {
        type: USER_LOGOUT
    }
}

export function authCheck() {
    return {
        type: USER_AUTH_CHECK
    }
}