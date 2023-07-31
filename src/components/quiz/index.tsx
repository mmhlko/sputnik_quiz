import s from './styles.module.scss';
import { useAppDispatch, useAppSelector } from 'storage/hook-types';
import QuestionList from 'components/question-list';
import QuizResult from 'components/quiz-result';
import { Button, Modal } from 'antd';
import { Typography } from 'antd';
import Spiner from 'components/spiner';
import { countingAction, resetAction } from 'storage/actions/quizGame-actions';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { questionsSelector, showResultSelector } from 'storage/selectors';
import { homePath } from 'utils/constants';
import Timer from 'components/timer';
import { TAnswers, TQuizQuestion } from 'types/reducers';
const { Title } = Typography;

const Quiz = () => {

  const showResult = useAppSelector(showResultSelector);
  const { loading, totalQuestions } = useAppSelector(questionsSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation()
  const dispatch = useAppDispatch();

  const getQuizScore = (answers: TAnswers, questions: TQuizQuestion[]) => {

    let quizScore = 0;
    questions.forEach((question) => {
      if (answers[question.id]) {
        if (question.correctAnswer === answers[question.id][0]) {
          quizScore++;
        }
      }
    })
    dispatch(countingAction(quizScore))
  }

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(resetAction())
  }, [location])

  return (
    <>
      {!loading
        ? <div className={s.quizWrapper}>
          <Title level={2}>Викторина</Title>
          <Title level={4}>Всего {totalQuestions} вопросов</Title>
          <Timer setIsModalOpen={setIsModalOpen} getQuizScore={getQuizScore} />
          <QuestionList getQuizScore={getQuizScore} />
          <QuizResult />
          <div className={s.buttons}>
            <Button disabled={showResult} form='quiz-form' type="primary" htmlType='submit' block={false}>Узнать результат</Button>
            <Link to={homePath}><Button type='primary'>Начать сначала</Button></Link>
          </div>
        </div>
        : <Spiner />
      }
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <div className={s.modalContent}>
          <Title level={2}>Время вышло</Title>
          <QuizResult />
          <Link to={homePath}><Button type='primary'>Начать сначала</Button></Link>
        </div>
      </Modal>
    </>
  )
}

export default React.memo(Quiz);