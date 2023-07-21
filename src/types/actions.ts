import { User } from "@supabase/supabase-js";
import { TQuizQuestion } from "./reducers";

//commons

export type TEmptyAction = {
    type: string
}

export type TDataLoading = {
    type: string,
    payload: boolean
}

//quiz-data
export type QuizActions = TQuizDataAction | TDataLoading | TQuizDataError;

export type TQuizDataAction = {
    type: string,
    payload?: TQuizQuestion[] | boolean | Error
}

export type TQuizDataError = {
    type: string,
    payload?: string
}

//quiz-game

export type TQuizGameActions = {
    type: string,
    payload: number | null
}

//user

export type UserActions = TUserActions | TUserError | TDataLoading

export type TUserActions = {
    type: string,
    payload: User | null
}

export type TUserError = {
    type: string,
    payload?: string
}