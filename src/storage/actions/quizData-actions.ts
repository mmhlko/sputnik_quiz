import { TQuizDataAction, TQuizDataError, TQuizDataLoading } from "types/actions";
import { GET_QUESTIONS, IS_QUESTIONS_LOADING, QUIZ_ERROR } from "../action-types";
import { TQuizQuestion } from "types/reducers";

export function getQuestionsAction(data: TQuizQuestion[]):TQuizDataAction {
    return {
        type: GET_QUESTIONS,
        payload: data,
    }
}

export function quizError(error: string): TQuizDataError{
    return {
        type: QUIZ_ERROR,
        payload: error        
    }
}

export function isQuestionsLoading(isLoading: boolean): TQuizDataLoading{
    return {
        type: IS_QUESTIONS_LOADING,
        payload: isLoading        
    }
}