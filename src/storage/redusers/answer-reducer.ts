import { TCounterAction } from "storage/actions/counter-actions"


export type TCounterState = {
    result: number,
    totalQuestions: number
}

const initialState: TCounterState = {
    result: 0,
    totalQuestions: 0
}

export function answerReducer(state = initialState, action:TCounterAction) {
    switch (action.type) {
          
        default:
            return state
    }
}