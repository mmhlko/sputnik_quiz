import { User } from "@supabase/supabase-js";
import { TQuizQuestion } from "./reducers";
import { DECREMENT, GET_QUESTIONS, INCREMENT, IS_LOADING, QUIZ_ERROR, RESET_GAME, SHOW_RESULT, USER_AUTH_CHECK, USER_REFRESHTOKEN, USER_ERROR, USER_LOGOUT, USER_REGISTER } from "storage/action-types";

//commons

export type TEmptyAction = {
    type: string
}

export type TDataLoading = {
    type: typeof IS_LOADING,
    payload: boolean
}

//quiz-data
export type TQuizActions = TQuizDataAction | TDataLoading | TQuizDataError;

export type TQuizDataAction = {
    type: typeof GET_QUESTIONS,
    payload: TQuizQuestion[]
}

export type TQuizDataError = {
    type: typeof QUIZ_ERROR,
    payload: string
}



//quiz-game

export type TQuizGameActions = TQuizIncrementAction | TQuizDecrementAction | TQuizResultAction | TQuizResetAction

export type TQuizIncrementAction = {
    type: typeof INCREMENT,
    payload: number
}
export type TQuizDecrementAction = {
    type: typeof DECREMENT,
    payload: number
}
export type TQuizResultAction = {
    type: typeof SHOW_RESULT,
}
export type TQuizResetAction = {
    type: typeof RESET_GAME,
}

//user

export type TUserActions = TUserRegisterAction | TUserLoginAction | TUserLocalStorageAction | TUserErrorAction | TUserLogoutAction | TDataLoading | TUserRefreshTokenAction | TUserAuthCheckAction
export type TLogoutActions = TDataLoading | TQuizResetAction | TUserLogoutAction

export type TUserRegisterAction = {
    type: typeof USER_REGISTER,
    payload: string
}

export type TUserLoginAction = {
    type: string,
    payload: User 
}

export type TUserRefreshTokenAction = {
    type: typeof USER_REFRESHTOKEN, 
    payload: User    
}

export type TUserLocalStorageAction = {
    type: string,
    payload: User 
}

export type TUserLogoutAction = {
    type: typeof USER_LOGOUT,     
}

export type TUserAuthCheckAction = {
    type: typeof USER_AUTH_CHECK,     
}

export type TUserErrorAction = {
    type: typeof USER_ERROR,
    payload: string
}

