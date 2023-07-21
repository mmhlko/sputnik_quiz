import { TQuizDataAction, TQuizDataError, TQuizDataLoading } from "types/actions";
import { GET_QUESTIONS, IS_LOADING, QUIZ_ERROR } from "../action-types";
import { TQuizQuestion } from "types/reducers";

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

