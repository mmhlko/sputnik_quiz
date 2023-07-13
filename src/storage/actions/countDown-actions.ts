import { TCountDown } from "storage/redusers/countDown-reducer"
import { START_TIMER, STOP_TIMER, TICK_TIMER } from "storage/types"

export type TCountDownAction = {
    type: string,
    payload?: TCountDown
}


export function startTimer():TCountDownAction {
    return {
        type: START_TIMER,
        
    }
}

export function stopTimer():TCountDownAction {
    return {
        type: STOP_TIMER,
        
    }
}

export function tickTimer():TCountDownAction {
    return {
        type: TICK_TIMER,
        
    }
}