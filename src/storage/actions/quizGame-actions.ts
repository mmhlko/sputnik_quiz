import { DECREMENT, INCREMENT, RESET_GAME, SHOW_RESULT } from "storage/action-types";
import { TQuizDecrementAction, TQuizIncrementAction, TQuizResetAction, TQuizResultAction } from "types/actions";

export function incrementAction(data: number):TQuizIncrementAction {
    return {
        type: INCREMENT,
        payload: data,
    }
}

export function decrementAction(data: number):TQuizDecrementAction {
    return {
        type: DECREMENT,
        payload: data,
    }
}

export function showResultAction():TQuizResultAction {
    return {
        type: SHOW_RESULT,
    }
}

export function resetAction():TQuizResetAction {
    return {
        type: RESET_GAME, 
    }
}





