import { combineReducers } from 'redux';
import { quizGameReducer } from './quizGame-reducer';
import { quizDataReducer } from './quizData-reducer';
import { userReducer } from './user-reducer';
import { countDownReducer } from './countDown-reducer';

export const rootReducer = combineReducers({
    result: quizGameReducer,
    questions: quizDataReducer,
    user: userReducer,
    timer: countDownReducer
    
})

