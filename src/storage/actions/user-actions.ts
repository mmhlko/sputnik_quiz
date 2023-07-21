import { User } from "@supabase/supabase-js"
import { USER_AUTH_CHECK, USER_LOCAL_STORAGE, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "../action-types";
import { TUserActions } from "types/actions";

export function registerAction(data:User):TUserActions {
    return {
        type: USER_REGISTER,
        payload: data,
    }
}

export function authorizeAction(data:User):TUserActions {
    return {
        type: USER_LOGIN,
        payload: data,
    }
}

export function getUser(data:User):TUserActions {
    return {
        type: USER_LOCAL_STORAGE,
        payload: data,
    }
}

export function userLogout():TUserActions {
    return {
        type: USER_LOGOUT,
        payload: null
    }
}

export function authCheck():TUserActions {
    return {
        type: USER_AUTH_CHECK,
        payload: null
    }
}