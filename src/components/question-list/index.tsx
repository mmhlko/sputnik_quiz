import Question from "components/question"
import s from "./styles.module.scss"
import { useAppDispatch, useAppSelector } from "storage/hook";
import { SyntheticEvent, useEffect, useState } from 'react';
import { TQuizQuestion } from "storage/quizData";
import { showResultAction } from "storage/actions/quizGame-actions";
import { Pagination } from 'antd';

export type TQuestionListProps = {
    questions: TQuizQuestion[],
    totalQuestions: number,

}

function QuestionList({ questions, totalQuestions }: TQuestionListProps) {
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    const isDisable = useAppSelector(state => state.result.showResult)
    const [startItem, setStartItem] = useState(0);

    const PAGE_SIZE = 5;
    const endItem = startItem + PAGE_SIZE;
    const isPaginated = totalQuestions / PAGE_SIZE > 1;



    function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        dispatch(showResultAction());
    }

    function handleClickPage(page: number) {

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
                    <Question key={question.id} question={question} isDisable={isDisable} />
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
}

export default QuestionList