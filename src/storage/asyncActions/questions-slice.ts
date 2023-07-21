import { getQuestionsAction, isQuestionsLoading, quizError } from "../../storage/actions/quizData-actions";
import api from "../../utils/api";
import { QuizActions } from "types/actions";
import { TQuestionResponse } from "types/api-types";
import { Dispatch } from "redux";

export const fetchGetQuestionsSupabase = ():any => {

    return (dispatch: Dispatch<QuizActions>) => {

        dispatch(isQuestionsLoading(true))

        api.fetchQuestions()
            .then((questions: TQuestionResponse) => {
                dispatch(getQuestionsAction(questions))
            })
            .catch(err => dispatch(quizError(err.toString())))
            .finally(() => dispatch(isQuestionsLoading(false)))
    }
}