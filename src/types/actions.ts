import { User } from "@supabase/supabase-js";
import { TAnswers, TQuizQuestion } from "./reducers";
import { GET_QUESTIONS, IS_LOADING, QUIZ_ERROR, RESET_GAME, SHOW_RESULT, USER_AUTH_CHECK, USER_REFRESHTOKEN, USER_ERROR, USER_LOGOUT, USER_REGISTER, ANSWER_INITIALIZE, COUNTING } from "storage/action-types";

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

export type TQuizGameActions = TQuizResultAction | TQuizResetAction | TQuizAnswerAction | TQuizCountingAction

export type TQuizResultAction = {
    type: typeof SHOW_RESULT,
}
export type TQuizResetAction = {
    type: typeof RESET_GAME,
}

export type TQuizAnswerAction = {
    type: typeof ANSWER_INITIALIZE,
    payload: TAnswers
}

export type TQuizCountingAction = {
    type: typeof COUNTING,
    payload: number
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

