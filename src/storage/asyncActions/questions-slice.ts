import { Dispatch } from "react"
import { TQuizDataAction, getQuestionsAction } from "storage/actions/quizData-actions"
import api, { TQuestionResponse } from "utils/api"



export const fetchGetQuestions = (token:string):any => {
    
    return (dispatch:Dispatch<TQuizDataAction>) => {
        api.getQuestions(token)
            .then((questions:TQuestionResponse) => {
                dispatch(getQuestionsAction(questions))
            })
            .catch(err => Error(err))
    }
}