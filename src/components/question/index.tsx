import s from './styles.module.scss';
import cn from 'classnames';
import useCheckbox from 'hooks/useCheckbox';
import { useAppDispatch, useAppSelector } from 'storage/hook-types';
import { answerAction } from 'storage/actions/quizGame-actions';
import { Checkbox, Typography, Card } from 'antd';
import { TQuizQuestion } from 'types/reducers';
import { answersSelector } from 'storage/selectors';
const { Title, Text } = Typography;

type TQuestionProps = {
    question: TQuizQuestion,
    isDisable: boolean,
    id: number
}

const Question = ({ question, isDisable, id }: TQuestionProps) => {

    const dispatch = useAppDispatch();
    const { title, variants, correctAnswer } = question;
    const { value, onChange } = useCheckbox(null);
    
    const answer = useAppSelector(answersSelector)

    const handleClickCheckbox = (answerNumber: number) => {
        if (answerNumber !== value) {
            dispatch(answerAction({ [id]: [answerNumber] }))
        }
    }
    
    return (

        <Card title={<Title style={{ whiteSpace: 'pre-wrap' }} level={3}>{title}</Title>} className={s.wrapper}>
            <ul className={s.variants}>
                {variants.map((variant, index) => {
                    const answerNumber = index + 1;
                    return (
                        <li key={index} className={s.variant}>
                            <Checkbox onClick={() => handleClickCheckbox(answerNumber)} value={answerNumber} disabled={isDisable} onChange={onChange} checked={answerNumber ===  /* activeCheckbox */ (answer[id] && answer[id][0])}>
                                <Text className={cn({ [s['colorGreen']]: isDisable && answerNumber === correctAnswer }, { [s['colorRed']]: isDisable && answerNumber !== correctAnswer })}>{variant}</Text>
                            </Checkbox>
                        </li>
                    )
                }
                )}
            </ul>
        </Card>

    )
}

export default Question;

