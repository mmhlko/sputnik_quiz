import { TCounterAction } from "storage/actions/counter-actions"
import { TQuizQuestion } from "storage/quizData"
import { GET_QUESTIONS } from "storage/types"


export type TCounterState = {
    data: TQuizQuestion[],
    totalQuestions: number
}

const initialState: TCounterState = {
    data: [],
    totalQuestions: 0
}

export function quizDataReducer(state = initialState, action:{type: string, payload: TQuizQuestion[]}) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {...state, data: action.payload}
            break;
    
        default:
            return state
    }
}