import { Dispatch } from "react"
import { TQuizDataAction, TQuizDataError, TQuizDataLoading, getQuestionsAction, isLoading, quizError } from "storage/actions/quizData-actions"
import api, { TQuestionResponse } from "utils/api"

type QuizActions = TQuizDataAction | TQuizDataLoading | TQuizDataError


export const fetchGetQuestions = (token:string):any => {    
    
    return (dispatch:Dispatch<QuizActions>) => {   
        
        dispatch(isLoading(true))
        
        api.getQuestions(token)
            .then((questions:TQuestionResponse) => {                
                dispatch(getQuestionsAction(questions))
            })
            .catch(err => dispatch(quizError(err.toString())))
            .finally(() => dispatch(isLoading(false)))
    }
}