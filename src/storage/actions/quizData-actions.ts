import { TQuizQuestion } from "storage/redusers/quizData-reducer";
import { GET_QUESTIONS } from "storage/types";

export type TQuizDataAction = {
    type: string,
    payload: TQuizQuestion[]
}

export function getQuestionsAction(data: TQuizQuestion[]):TQuizDataAction {
    return {
        type: GET_QUESTIONS,
        payload: data,
    }
}

