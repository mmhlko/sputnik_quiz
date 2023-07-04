
import Quiz from 'components/quiz';
import React, { useEffect, useState } from 'react';
import { decrementAction, incrementAction } from 'storage/actions/counter-actions';
import { getQuestionsAction } from 'storage/actions/quizData-actions';
import { useAppDispatch, useAppSelector } from 'storage/hook';
import { quizData } from 'storage/quizData';

export function App() {

    const [questions, setQuestions] = useState(quizData)
    const dispatch = useAppDispatch();
    const counter = useAppSelector(state => state.counter.value)

    
    const onClickButtonPlus = () => {
        dispatch(incrementAction(1))
    }
    const onClickButtonMinus = () => {
        dispatch(decrementAction(1))
    }
    const getQuizData = () => {
        dispatch(getQuestionsAction(questions))
    }

    
    useEffect(() => {

        getQuizData()
    } , [])


    return (
        <>

            <h2>Счетчик: {counter}</h2>
            <div>
                <button onClick={onClickButtonMinus}>Убавить</button>
                <button onClick={onClickButtonPlus}>Добавить</button>
            </div>
            <Quiz /> 
            
        </>
    );
}