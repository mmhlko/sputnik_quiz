import { TResultAction } from "storage/actions/quizGame-actions";
import { DECREMENT, INCREMENT, SHOW_RESULT } from "storage/types";

export type TResultState = {
    score: number,
    showResult: boolean
}

const initialState: TResultState = {
    score: 0,
    showResult: false
}

export function quizGameReducer(state = initialState, action:TResultAction) {
    switch (action.type) {
        case INCREMENT:
            return {...state, score: state.score + action.payload}
        case DECREMENT:
            return {...state, score: state.score - action.payload}
        case SHOW_RESULT:
            return {...state, showResult: true}
        default:
            return state
    }
}