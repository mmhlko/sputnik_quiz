import { CHANGE_VIEW, DECREMENT, INCREMENT } from "storage/types"

export type TCounterState = {
    value: number,
    show: boolean
}

const initialState: TCounterState = {
    value: 0,
    show: false,
}

export function counterReducer(state = initialState, action:any) {
    switch (action.type) {
        case INCREMENT:
            return {...state, value: state.value + action.payload}
        case DECREMENT:
            return {...state, value: state.value - action.payload}
        case CHANGE_VIEW:
            return {...state, show: !state.show}    
        default:
            return state
    }
}