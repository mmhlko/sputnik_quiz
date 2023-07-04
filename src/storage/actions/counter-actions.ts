import { CHANGE_VIEW, DECREMENT, INCREMENT } from "storage/types"

export type TCounterAction = {
    type: string,
    payload: number
}

export function incrementAction(data: number):TCounterAction {
    return {
        type: INCREMENT,
        payload: data,
    }
}

export function decrementAction(data: number):TCounterAction {
    return {
        type: DECREMENT,
        payload: data,
    }
}

export function changeViewAction(data: number):TCounterAction {
    return {
        type: CHANGE_VIEW,
        payload: data,
    }
}