import { RootState } from "./redux-types";

//result
export const resultSelector = (state:RootState) => state.result;
export const answersSelector = (state:RootState) => state.result.answers;
export const showResultSelector = (state:RootState) => state.result.showResult;
export const scoreSelector = (state:RootState) => state.result.score;


//questions
export const questionsSelector = (state:RootState) => state.questions;
export const questionsDataSelector = (state:RootState) => state.questions.data;

//user
export const userDataSelector = (state:RootState) => state.user.data;
export const userStateSelector = (state:RootState) => state.user;