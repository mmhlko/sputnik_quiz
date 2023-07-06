import s from './styles.module.scss';
import cn from 'classnames';
import useCheckbox from 'hooks/useCheckbox';
import { useAppDispatch } from 'storage/hook';
import { TQuizQuestion } from 'storage/quizData';
import { useEffect, useState } from 'react';
import { decrementAction, incrementAction } from 'storage/actions/quizGame-actions';
import { Checkbox, Typography, Card } from 'antd';
const { Title, Text } = Typography;

export type TQuestionProps = {
    question: TQuizQuestion,
    isDisable: boolean
}

function Question({ question, isDisable }: TQuestionProps) {
    const dispatch = useAppDispatch();
    const [activeCheckbox, setActiveCheckbox] = useState<number | null>(null);
    const { title, variants, correctAnswer } = question;

    const { value, onChange} = useCheckbox(null);

    //логика определения правильного ответа
    useEffect(() => {

        setActiveCheckbox(value);     

        if (activeCheckbox) {
            if (value === correctAnswer) {
                if (activeCheckbox === correctAnswer) {
                    return
                } else {
                    dispatch(incrementAction(1))
                }
            } else {
                if (activeCheckbox !== correctAnswer) {
                    return
                } else {
                    dispatch(decrementAction(1))
                }
            }
        } else {
            if (value === correctAnswer) {
                dispatch(incrementAction(1))

            } else {
                return
            }
        }
        
    }, [value])
    
    return (

        <Card title={<Title style={{whiteSpace: 'pre-wrap'}} level={3}>{title}</Title>} className={s.wrapper}>
            <ul className={s.variants}>
                {variants.map((variant, index) => (
                    <li key={index} className={s.variant}>
                        <Checkbox value={index + 1} disabled={isDisable} onChange={onChange} checked={index + 1 === activeCheckbox}>
                            <Text className={cn({ [s['colorGreen']]: isDisable && index + 1 === correctAnswer }, { [s['colorRed']]: isDisable && index + 1 !== correctAnswer })}>{variant}</Text>
                        </Checkbox>
                    </li>
                ))}
            </ul>
        </Card>

    )
}

export default Question;

