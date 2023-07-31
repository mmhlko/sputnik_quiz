import React, { useEffect, useMemo } from "react";
import { CountdownProps, Statistic } from 'antd';
import { useAppDispatch, useAppSelector } from "storage/hook-types";
import { SET_TIME } from "utils/constants";
import { showResultAction } from "storage/actions/quizGame-actions";
import { TAnswers, TQuizQuestion } from "types/reducers";
import { answersSelector, questionsDataSelector, showResultSelector } from "storage/selectors";
const { Countdown } = Statistic;

type TTimerPros = {
    setIsModalOpen: (prev: boolean) => void,
    getQuizScore: (answers: TAnswers, questions: TQuizQuestion[]) => void
}

const Timer = ({ setIsModalOpen, getQuizScore }: TTimerPros) => {
    const showResult = useAppSelector(showResultSelector);
    const answers = useAppSelector(answersSelector);
    const questions = useAppSelector(questionsDataSelector);
    const dispatch = useAppDispatch();

    const setDeadline = useMemo(() => {
        return !showResult ? Date.now() + SET_TIME : 0;
    }, [showResult])

    const onFinish: CountdownProps['onFinish'] = () => {
        dispatch(showResultAction());
        setIsModalOpen(true);
    }

    useEffect(() => {
        getQuizScore(answers, questions)
    }, [showResult])

    return (
        <Countdown title="Осталось времени" value={setDeadline} onFinish={onFinish} />
    )
}

export default React.memo(Timer);