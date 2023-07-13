import { DECREMENT, INCREMENT, RESET_GAME, SHOW_RESULT } from "storage/types"

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

export function resetAction():TResultAction {
    return {
        type: RESET_GAME,        
    }
}





