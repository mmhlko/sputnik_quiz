import { User } from "@supabase/supabase-js";
import { TAnswers, TQuizQuestion } from "./reducers";
import { GET_QUESTIONS, QUIZ_ERROR, RESET_GAME, SHOW_RESULT, USER_AUTH_CHECK, USER_REFRESHTOKEN, USER_ERROR, USER_LOGOUT, USER_REGISTER, ANSWER_INITIALIZE, COUNTING, IS_QUESTIONS_LOADING, IS_USER_LOADING, USER_LOGIN, USER_LOCAL_STORAGE } from "storage/action-types";

//commons

export type TEmptyAction = {
    type: string
}



//quiz-data
export type TQuizActions = TQuizDataAction | TQuizDataLoading | TQuizDataError;

export type TQuizDataAction = {
    type: typeof GET_QUESTIONS,
    payload: TQuizQuestion[]
}

export type TQuizDataError = {
    type: typeof QUIZ_ERROR,
    payload: string
}

export type TQuizDataLoading = {
    type: typeof IS_QUESTIONS_LOADING,
    payload: boolean
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

export type TUserActions = TUserRegisterAction | TUserLoginAction | TUserLocalStorageAction | TUserErrorAction | TUserLogoutAction |  TUserRefreshTokenAction | TUserAuthCheckAction | TUserLoading
export type TLogoutActions = TUserLoading | TQuizResetAction | TUserLogoutAction

export type TUserRegisterAction = {
    type: typeof USER_REGISTER,
    payload: string
}

export type TUserLoginAction = {
    type: typeof USER_LOGIN,
    payload: User 
}

export type TUserRefreshTokenAction = {
    type: typeof USER_REFRESHTOKEN, 
    payload: User    
}

export type TUserLocalStorageAction = {
    type: typeof USER_LOCAL_STORAGE,
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

export type TUserLoading = {
    type: typeof IS_USER_LOADING,
    payload: boolean
}
