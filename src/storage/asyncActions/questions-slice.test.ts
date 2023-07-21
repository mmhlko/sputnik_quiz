import { quizDataReducer } from "../../storage/redusers/quizData-reducer";
import { getQuestionsAction } from "../../storage/actions/quizData-actions";
import { TQuizDataState } from "types/reducers";

const questions = [{
    "id": 1,
    "title": "Как называется еврейский Новый год?",
    "variants": [
        "Ханука",
        "Йом Кипур",
        "Кванза",
        "Рош ха-Шана",
        "Еврейский Новый год"
    ],
    "correctAnswer": 4
},
{
    "id": 2,
    "title": "Сколько синих полос на флаге США?",
    "variants": [
        "6",
        "7",
        "13",
        "0",
        "12"
    ],
    "correctAnswer": 2
},]

test('Redux get questions', () => {
    const initialState: TQuizDataState = {
        data: [],
        totalQuestions: 0,
        loading: false,
        error: null
    }
    const newState = quizDataReducer(initialState, getQuestionsAction(questions));
    expect(newState.data).toBe(questions)
});