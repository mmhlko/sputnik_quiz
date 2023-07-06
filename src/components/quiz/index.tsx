import s from './styles.module.scss';
import { useAppDispatch, useAppSelector } from 'storage/hook';
import QuestionList from 'components/question-list';
import QuizResult from 'components/quiz-result';
import { Button } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

function Quiz() {

    const { score, showResult } = useAppSelector(state => state.result);
    const { data: questions, totalQuestions } = useAppSelector(state => state.questions);

    return (
        <div className={s.quizWrapper}>
            <Title level={2}>Викторина</Title>
            <QuestionList questions={questions} totalQuestions={totalQuestions} />
            {showResult && <QuizResult result={score} total={totalQuestions} />}
            <div className={s.buttons}>
                <Button disabled={showResult} form='quiz-form' type="primary" htmlType='submit' block={false}>Узнать результат</Button>
                <Button type='link' href='/'>Начать сначала</Button>
            </div>
        </div>
    )
}

export default Quiz;