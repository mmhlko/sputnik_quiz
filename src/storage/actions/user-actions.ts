import { USER_LOCAL_STORAGE, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "storage/types"
import { TUser, TUserRegisterBody, TUserResponce } from "utils/api"


export type TRegisterAction = {
    type: string,
    payload?: TUserResponce
}

export type TAuthAction = {
    type: string,
    payload?: TUserResponce
}

export function registerAction(data:TUserResponce):TRegisterAction {
    return {
        type: USER_REGISTER,
        payload: data,
    }
}

export function authorizeAction(data:TUserResponce):TAuthAction {
    return {
        type: USER_LOGIN,
        payload: data,
    }
}

export function getUser(data:TUserResponce):TAuthAction {
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