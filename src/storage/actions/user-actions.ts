import { User } from "@supabase/supabase-js";
import { IS_LOADING, USER_AUTH_CHECK, USER_ERROR, USER_LOCAL_STORAGE, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "../action-types";
import { TDataLoading, TUserActions, TUserError, TUserRegisterAction } from "types/actions";

export function registerAction(data:string):TUserRegisterAction {
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

export function userError(error: any): TUserError{
    return {
        type: USER_ERROR,
        payload: error        
    }
}

export function isUserLoading(isLoading: boolean): TDataLoading{
    return {
        type: IS_LOADING,
        payload: isLoading        
    }
}
