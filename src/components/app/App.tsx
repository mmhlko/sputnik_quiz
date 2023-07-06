import { useEffect } from 'react';
import { getQuestionsAction } from 'storage/actions/quizData-actions';
import { useAppDispatch } from 'storage/hook';
import { quizData } from 'storage/quizData';
import Quiz from 'components/quiz';

export function App() {

    const dispatch = useAppDispatch();

    const getQuizData = () => {
        dispatch(getQuestionsAction(quizData))
    }

    useEffect(() => {
        getQuizData()

    }, [])

    return (
        <div className="container">
            <Quiz />
        </div>
    );
}