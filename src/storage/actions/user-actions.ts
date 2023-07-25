import { User } from "@supabase/supabase-js";
import { IS_LOADING, USER_AUTH_CHECK, USER_ERROR, USER_LOCAL_STORAGE, USER_LOGIN, USER_LOGOUT, USER_REFRESHTOKEN, USER_REGISTER } from "../action-types";
import { TDataLoading, TUserAuthCheckAction, TUserErrorAction, TUserLocalStorageAction, TUserLoginAction, TUserLogoutAction, TUserRefreshTokenAction, TUserRegisterAction } from "types/actions";

export function registerAction(data:string):TUserRegisterAction {
    return {
        type: USER_REGISTER,
        payload: data, //получаем строку успешной авторизации
    }
}

export function authorizeAction(data:User):TUserLoginAction {
    return {
        type: USER_LOGIN,
        payload: data,
    }
}

export function refreshTokenAction(data:User):TUserRefreshTokenAction {
    return {
        type: USER_REFRESHTOKEN,
        payload: data,
    }
}

export function getUser(data:User):TUserLocalStorageAction {
    return {
        type: USER_LOCAL_STORAGE,
        payload: data,
    }
}

export function userLogout():TUserLogoutAction {
    return {
        type: USER_LOGOUT
    }
}

export function authCheck():TUserAuthCheckAction {
    return {
        type: USER_AUTH_CHECK,
    }
}

export function userError(error: string): TUserErrorAction{
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