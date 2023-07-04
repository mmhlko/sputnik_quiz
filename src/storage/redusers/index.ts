import { combineReducers } from 'redux';
import { counterReducer } from './counter-reducer';
import { answerReducer } from './answer-reducer';
import { quizDataReducer } from './quizData-reducer';

export const rootReducer = combineReducers({
    counter: counterReducer,
    questions: quizDataReducer,
    result: answerReducer
})

