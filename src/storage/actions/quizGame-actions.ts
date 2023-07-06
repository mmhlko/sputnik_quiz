import { DECREMENT, INCREMENT, SHOW_RESULT } from "storage/types"

export type TResultAction = {
    type: string,
    payload?: number
}

export function incrementAction(data: number):TResultAction {
    return {
        type: INCREMENT,
        payload: data,
    }
}

export function decrementAction(data: number):TResultAction {
    return {
        type: DECREMENT,
        payload: data,
    }
}

export function showResultAction():TResultAction {
    return {
        type: SHOW_RESULT,        
    }
}



