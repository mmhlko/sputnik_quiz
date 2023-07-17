import { TQuizQuestion } from "storage/redusers/quizData-reducer";
import { GET_QUESTIONS, IS_LOADING, QUIZ_ERROR } from "storage/types";

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

export function getQuestionsAction(data: TQuizQuestion[]):TQuizDataAction {
    return {
        type: GET_QUESTIONS,
        payload: data,
    }
}

export function isLoading(isLoading: boolean): TQuizDataLoading{
    return {
        type: IS_LOADING,
        payload: isLoading
        
    }
}

export function quizError(error: any): TQuizDataError{
    return {
        type: QUIZ_ERROR,
        payload: error        
    }
}

