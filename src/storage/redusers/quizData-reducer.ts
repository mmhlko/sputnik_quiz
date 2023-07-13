import { TQuizDataAction } from "storage/actions/quizData-actions"
import { GET_QUESTIONS } from "storage/types"

export type TQuizQuestion = {
    title: string,
    variants: string[],
    correctAnswer: number,
    id: number
}

export type TQuizDataState = {
    data: TQuizQuestion[],
    totalQuestions: number
}

const initialState: TQuizDataState = {
    data: [],
    totalQuestions: 0
}

export function quizDataReducer(state = initialState, action:TQuizDataAction) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {...state, data: action.payload, totalQuestions: action.payload.length}
    
        default:
            return state
    }
}