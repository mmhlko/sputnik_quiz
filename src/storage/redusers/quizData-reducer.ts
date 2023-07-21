import { TQuizDataState } from "types/reducers"
import { GET_QUESTIONS, IS_LOADING, QUIZ_ERROR} from "../action-types"

const initialState: TQuizDataState = {
    data: [],
    totalQuestions: 0,
    loading: false,
    error: null
}

export function quizDataReducer(state = initialState, action:any) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {...state, data: action.payload, totalQuestions: action.payload.length}
        case IS_LOADING:
            return {...state, loading: action.payload}
        case QUIZ_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}