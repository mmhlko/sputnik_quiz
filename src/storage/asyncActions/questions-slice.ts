import { getQuestionsAction, isLoading, quizError } from "../../storage/actions/quizData-actions";
import api from "../../utils/api-types";
import { TQuizDataAction, TQuizDataError, TQuizDataLoading } from "types/actions";
import { TQuestionResponse } from "types/api";
import { Dispatch } from "redux";

type QuizActions = TQuizDataAction | TQuizDataLoading | TQuizDataError;
export type fetchGetQuestionsSupabaseReturned  = (dispatch: Dispatch<QuizActions>) => void

export const fetchGetQuestionsSupabase = ():any => {

    return (dispatch: Dispatch<QuizActions>) => {

        dispatch(isLoading(true))

        api.fetchQuestions()
            .then((questions: TQuestionResponse) => {
                dispatch(getQuestionsAction(questions))
            })
            .catch(err => dispatch(quizError(err.toString())))
            .finally(() => dispatch(isLoading(false)))
    }
}