import { DECREMENT, INCREMENT, RESET_GAME, SHOW_RESULT } from "storage/action-types";
import { TResultState } from "types/reducers";
import { TQuizGameActions } from "types/actions";

const initialState: TResultState = {
    score: 0,
    showResult: false,   
}

export function quizGameReducer(state = initialState, action:TQuizGameActions) {
    switch (action.type) {
        case INCREMENT:
            return {...state, score: state.score + action.payload}
        case DECREMENT:
            return {...state, score: state.score - action.payload}
        case SHOW_RESULT:
            return {...state, showResult: true}
        case RESET_GAME:
            return {...state, ...initialState}                      
        default:
            return state
    }
}
