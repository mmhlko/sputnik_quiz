
import Quiz from 'components/quiz';
import { useEffect, useState } from 'react';
import { getQuestionsAction } from 'storage/actions/quizData-actions';
import { useAppDispatch, useAppSelector } from 'storage/hook';
import { quizData } from 'storage/quizData';

export function App() {

    const [questions, setQuestions] = useState(quizData)
    const dispatch = useAppDispatch();
    const counter = useAppSelector(state => state.result.score)

    const getQuizData = () => {
        dispatch(getQuestionsAction(questions))
    }

    
    useEffect(() => {
        getQuizData()
    } , [])


    return (
        <>
            <div className="container">
                <Quiz /> 
            </div>
            
            
        </>
    );
}