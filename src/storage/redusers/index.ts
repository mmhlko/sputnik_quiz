import { combineReducers } from 'redux';
import { quizGameReducer } from './quizGame-reducer';
import { quizDataReducer } from './quizData-reducer';
import { userReducer } from './user-reducer';

export const rootReducer = combineReducers({
    result: quizGameReducer,
    questions: quizDataReducer,
    user: userReducer   
})

