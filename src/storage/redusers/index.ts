import { combineReducers } from 'redux';
import { quizGameReducer } from './quizGame-reducer';
import { quizDataReducer } from './quizData-reducer';

export const rootReducer = combineReducers({
    result: quizGameReducer,
    questions: quizDataReducer,
    
})

