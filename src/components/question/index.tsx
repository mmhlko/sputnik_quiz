import s from './styles.module.scss';
import cn from 'classnames';
import useCheckbox from 'hooks/useCheckbox';
import { useAppDispatch, useAppSelector } from 'storage/hook-types';
import { answerAction } from 'storage/actions/quizGame-actions';
import { Checkbox, Typography, Card } from 'antd';
import { TQuizQuestion } from 'types/reducers';
import { answersSelector } from 'storage/selectors';
import { memo, useCallback } from 'react';
const { Title, Text } = Typography;

type TQuestionProps = {
    question: TQuizQuestion,
    isDisable: boolean,
    id: number
}

const Question = memo(({ question, isDisable, id }: TQuestionProps) => {

    const dispatch = useAppDispatch();
    const { title, variants, correctAnswer } = question;
    const { value, onChange } = useCheckbox(null);

    const answers = useAppSelector(answersSelector)

    const handleClickCheckbox = useCallback((answerNumber: number) => {
        if (answerNumber !== value) {
            dispatch(answerAction({ [id]: [answerNumber] }))
        }
    }, [value])


    return (

        <Card title={<Title style={{ whiteSpace: 'pre-wrap' }} level={3}>{title}</Title>} className={s.wrapper}>
            <ul className={s.variants}>
                {variants.map((variant, index) => {
                    const answerNumber = index + 1;
                    const onClickCheckbox = () => {
                        handleClickCheckbox(answerNumber)
                    }
                    return (
                        <li key={index} className={s.variant}>
                            <Checkbox onClick={onClickCheckbox} value={answerNumber} disabled={isDisable} onChange={onChange} checked={answerNumber === (answers[id] && answers[id][0])}>
                                <Text className={cn({ [s['colorGreen']]: isDisable && answerNumber === correctAnswer }, { [s['colorRed']]: isDisable && answerNumber !== correctAnswer })}>{variant}</Text>
                            </Checkbox>
                        </li>
                    )
                }
                )}
            </ul>
        </Card>

    )
})

export default Question;

