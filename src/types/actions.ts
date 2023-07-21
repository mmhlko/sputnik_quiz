import { User } from "@supabase/supabase-js"
import { TQuizQuestion } from "./reducers"

//commons

export type TEmptyAction = {
    type: string
}

//quiz-data
export type TQuizDataAction = {
    type: string,
    payload?: TQuizQuestion[] | boolean | Error
}
export type TQuizDataLoading = {
    type: string,
    payload?: boolean
}
export type TQuizDataError = {
    type: string,
    payload?: Error | unknown
}

//quiz-game

export type TQuizGameActions = {
    type: string,
    payload: number | null
}

//user

export type TUserActions = {
    type: string,
    payload: User | null
}