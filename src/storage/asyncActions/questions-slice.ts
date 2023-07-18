import { Dispatch } from "react"
import { TQuizDataAction, TQuizDataError, TQuizDataLoading, getQuestionsAction, isLoading, quizError } from "storage/actions/quizData-actions"
import api, { TQuestionResponse } from "utils/api"

type QuizActions = TQuizDataAction | TQuizDataLoading | TQuizDataError


export const fetchGetQuestionsSupabase = ():any => {    
    
    return (dispatch:Dispatch<QuizActions>) => {   
        
        dispatch(isLoading(true))
        
        api.fetchQuestions()
            .then((questions:TQuestionResponse) => {                
                dispatch(getQuestionsAction(questions))
            })
            .catch(err => dispatch(quizError(err.toString())))
            .finally(() => dispatch(isLoading(false)))
    }
}