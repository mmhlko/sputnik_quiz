import s from './styles.module.scss';
import { useAppDispatch, useAppSelector } from 'storage/hook';
import QuestionList from 'components/question-list';
import QuizResult from 'components/quiz-result';
import { Button } from 'antd';
import { resetQuizAction } from 'storage/actions/quizGame-actions';


function Quiz() {

    const { score, showResult } = useAppSelector(state => state.result);
    const { data: questions, totalQuestions } = useAppSelector(state => state.questions);

    const dispatch = useAppDispatch();
    

    function onClickReset(e:any) {
        dispatch(resetQuizAction());
        
        
        

    }

    return (
        <div className={s.quizWrapper}>
            <h3>Викторина</h3>
            <QuestionList questions={questions} totalQuestions={totalQuestions} />
            {showResult && <QuizResult result={score} total={totalQuestions} />}
            <div className={s.buttons}>
                <Button form='quiz-form' type="primary" htmlType='submit' block={false}>Узнать результат</Button>
                <Button form='quiz-form' onClick={onClickReset}>Начать сначала</Button>
            </div>
        </div>
    )
}

export default Quiz;