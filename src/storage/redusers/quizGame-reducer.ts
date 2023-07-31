import { ANSWER_INITIALIZE, COUNTING, RESET_GAME, SHOW_RESULT } from "storage/action-types";
import { TResultState } from "types/reducers";
import { TQuizGameActions } from "types/actions";

const initialState: TResultState = {
    score: 0,
    answers: {},
    showResult: false,   
}

export function quizGameReducer(state = initialState, action:TQuizGameActions) {
    switch (action.type) {        
        case SHOW_RESULT:
            return {...state, showResult: true}
        case RESET_GAME:
            return {...state, ...initialState}
        case ANSWER_INITIALIZE:
            return {...state, answers: {...state.answers, ...action.payload}}      
        case COUNTING:
            return {...state, score: action.payload}                        
        default:
            return state
    }
}
