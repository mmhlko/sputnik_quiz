import { ANSWER_INITIALIZE, COUNTING, RESET_GAME, SHOW_RESULT } from "storage/action-types";
import { TQuizAnswerAction, TQuizCountingAction, TQuizResetAction, TQuizResultAction } from "types/actions";
import { TAnswers } from "types/reducers";


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

export function answerAction(data: TAnswers):TQuizAnswerAction {
    return {
        type: ANSWER_INITIALIZE,
        payload: data,
    }
}

export function countingAction(data: number):TQuizCountingAction {
    return {
        type: COUNTING,
        payload: data,
    }
}






