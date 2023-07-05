
import Quiz from 'components/quiz';
import React, { useEffect, useState } from 'react';
import { decrementAction, incrementAction } from 'storage/actions/quizGame-actions';
import { getQuestionsAction } from 'storage/actions/quizData-actions';
import { useAppDispatch, useAppSelector } from 'storage/hook';
import { quizData } from 'storage/quizData';
import Checks from 'components/checks';

export function App() {

    const [questions, setQuestions] = useState(quizData)
    const dispatch = useAppDispatch();
    const counter = useAppSelector(state => state.result.score)

    
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
        
            <Quiz /> 
            <Checks />
            
        </>
    );
}