import { USER_LOGIN, USER_REGISTER } from "storage/types"
import { TUserRegisterBody, TUserResponce } from "utils/api"


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