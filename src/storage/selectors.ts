import { RootState } from "./redux-types";

//result
export const resultSelector = (state:RootState) =>  state.result;
export const answersSelector = (state:RootState) =>  state.result.answers;

//questions
export const questionsSelector = (state:RootState) =>  state.questions;

//user
export const userDataSelector = (state:RootState) =>  state.user.data;
export const userStateSelector = (state:RootState) =>  state.user;