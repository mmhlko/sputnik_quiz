//в разработке, в приложении пока не используется

import { TCountDownAction } from "storage/actions/countDown-actions"
import { START_TIMER, STOP_TIMER, TICK_TIMER } from "storage/types"

enum status {    
    paused = 'paused',
    playing = 'playing'
}

export type TCountDown = {
    seconds: number,
    start_time : number,
    status: status,
    decrement_interval?: number
}

const initialState: TCountDown = {    
    
    seconds: 0,
    start_time: 0,
    status: status.paused,
    decrement_interval: 0

}

export function countDownReducer(state = initialState, action:TCountDownAction) {
    switch (action.type) {
        case START_TIMER:
            return {...state, start_time : action.payload.start_time, seconds : action.payload.start_time, status: status.playing }        
        case STOP_TIMER:
            return {...state, status: status.paused}     
        case TICK_TIMER:
            return {...state, seconds: (state.seconds - .01).toFixed(2), status: status.playing }       
        default:
            return state
    }
}