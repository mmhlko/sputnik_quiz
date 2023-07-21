import { DECREMENT, INCREMENT, RESET_GAME, SHOW_RESULT } from "storage/action-types";
import { TQuizGameActions } from "types/actions";

export function incrementAction(data: number):TQuizGameActions {
    return {
        type: INCREMENT,
        payload: data,
    }
}

export function decrementAction(data: number):TQuizGameActions {
    return {
        type: DECREMENT,
        payload: data,
    }
}

export function showResultAction():TQuizGameActions {
    return {
        type: SHOW_RESULT,
        payload: null        
    }
}

export function resetAction():TQuizGameActions {
    return {
        type: RESET_GAME, 
        payload: null       
    }
}





