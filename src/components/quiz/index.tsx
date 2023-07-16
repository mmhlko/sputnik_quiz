import s from './styles.module.scss';
import { useAppDispatch, useAppSelector } from 'storage/hook';
import QuestionList from 'components/question-list';
import QuizResult from 'components/quiz-result';
import { Button, CountdownProps, Modal } from 'antd';
import { Typography } from 'antd';
import { Spiner } from 'components/spiner';
import { Statistic } from 'antd';
import { resetAction, showResultAction } from 'storage/actions/quizGame-actions';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
const { Countdown } = Statistic;
const { Title } = Typography;

function Quiz() {

  const { score, showResult } = useAppSelector(state => state.result);
  const { data: questions, totalQuestions } = useAppSelector(state => state.questions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation()
  const dispatch = useAppDispatch();

  const setDeadline = useMemo(() => {
    return !showResult ? Date.now() + 60000 : 0;
  } , [])

  const onFinish: CountdownProps['onFinish'] = () => {
    dispatch(showResultAction())
    setIsModalOpen(true);
  }; 

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
      {questions.length !== 0
        ? <div className={s.quizWrapper}>
          <Title level={2}>Викторина</Title>
          <Title level={4}>Всего {totalQuestions} вопросов</Title>
          <Countdown title="Осталось времени" value={setDeadline} onFinish={onFinish} />
          <QuestionList questions={questions} totalQuestions={totalQuestions} />
          {showResult && <QuizResult result={score} total={totalQuestions} />}
          <div className={s.buttons}>
            <Button disabled={showResult} form='quiz-form' type="primary" htmlType='submit' block={false}>Узнать результат</Button>
            <Button type='link' href='/quiz'>Начать сначала</Button>
          </div>
        </div>
        : <Spiner />
      }
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <div className={s.modalContent}>
          <Title level={2}>Время вышло</Title>
          {showResult && <QuizResult result={score} total={totalQuestions} />}
          <Button type='primary' href='/quiz'>Начать сначала</Button>
        </div>

      </Modal>
    </>


  )
}

export default Quiz;