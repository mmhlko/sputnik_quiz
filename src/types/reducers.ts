//quizDataReducer

import { User } from "@supabase/supabase-js"

export type TQuizQuestion = {
    title: string,
    variants: string[],
    correctAnswer: number,
    id: number
}

export type TQuizDataState = {
    data: TQuizQuestion[],
    totalQuestions: number,
    loading: boolean,
    error: string
}

//quizGameReducer

export type TAnswers = {
    [id: string]: number[];
}

export type TResultState = {    
    score: number,
    answers: TAnswers,
    showResult: boolean,  
}

//userReducer

export type TUserState = {
    isAuthChecked: boolean,
    data: User,
    error: string,
    loading: boolean,
    authorization: string
}
