import Question from "components/question"
import s from "./styles.module.scss"
import { useAppDispatch, useAppSelector } from "storage/hook-types";
import React, { SyntheticEvent, memo, useEffect, useState } from 'react';
import { showResultAction } from "storage/actions/quizGame-actions";
import { Pagination } from 'antd';
import { TAnswers, TQuizQuestion } from "types/reducers";
import { answersSelector, questionsSelector, showResultSelector } from "storage/selectors";

type TQuestionListProps = {
    getQuizScore: (answers: TAnswers, questions: TQuizQuestion[]) => void;
}

const QuestionList = memo(({ getQuizScore }: TQuestionListProps) => {
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    const answers = useAppSelector(answersSelector);
    const { data: questions, totalQuestions } = useAppSelector(questionsSelector);
    const showResult = useAppSelector(showResultSelector)
    const [startItem, setStartItem] = useState(0);

    const PAGE_SIZE = 5;
    const endItem = startItem + PAGE_SIZE;
    const isPaginated = totalQuestions / PAGE_SIZE > 1;

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        getQuizScore(answers, questions);
        dispatch(showResultAction());
    }

    const handleClickPage = (page: number) => {
        setPage(page);
        if (page === 1) {
            setStartItem(0)
        } else {
            setStartItem((page - 1) * PAGE_SIZE)
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [startItem])   

    return (
        <>  
            <form className={s.questions} onSubmit={handleSubmit} id="quiz-form">
                {questions.slice(startItem, endItem).map((question) => (
                    <Question key={question.id} question={question} isDisable={showResult} id={question.id} />
                ))}
            </form>
            
            {isPaginated &&
                <Pagination
                    total={totalQuestions}
                    pageSize={PAGE_SIZE}
                    current={page}
                    onChange={(page) => handleClickPage(page)}
                    className={s.pagination}
                />
            }
        </>
    )
})

export default React.memo(QuestionList);