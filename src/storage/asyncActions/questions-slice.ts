import { getQuestionsAction, isQuestionsLoading, quizError } from "../../storage/actions/quizData-actions";
import api from "../../utils/api";
import { TQuizActions } from "types/actions";
import { TQuestionResponse } from "types/api-types";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "storage/redux-types";

export const fetchGetQuestionsSupabase = ():ThunkAction<void, RootState, unknown, TQuizActions> => {

    return (dispatch) => {

        dispatch(isQuestionsLoading(true))

        api.fetchQuestions()
            .then((questions: TQuestionResponse) => {
                dispatch(getQuestionsAction(questions))
            })
            .catch(err => {
                dispatch(quizError(err.toString()))
            })
            .finally(() => dispatch(isQuestionsLoading(false)))
    }
}