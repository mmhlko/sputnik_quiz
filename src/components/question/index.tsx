import { useAppDispatch, useAppSelector } from 'storage/hook';
import s from './styles.module.scss';
import { TQuizQuestion } from 'storage/quizData';
import { useRef, useState } from 'react';
import { decrementAction, incrementAction } from 'storage/actions/quizGame-actions';
import { Checkbox } from 'antd';


export type TQuestionProps = {
    question: TQuizQuestion,
    isDisable: boolean
}

function Question({ question, isDisable }: TQuestionProps) {

    const [activeCheckbox, setActiveCheckbox] = useState<number | null>(null);
    const { title, variants, id, correctAnswer } = question;
    const dispatch = useAppDispatch();
    const ref:any = useRef([]);

    const handleClickVariant = (answer: number) => {

        
        setActiveCheckbox(answer)

        if (activeCheckbox) {
            if (answer === correctAnswer) {
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
            if (answer === correctAnswer) {
                dispatch(incrementAction(1))
            } else {
                return
            }
        }       

        
    }   

    

    return (

        <div className={s.wrapper}>
            <h3>{title}</h3>
            <ul className={s.variants}>
                {variants.map((variant, index) => (
                    <li key={index} className={s.variant}>
                        <Checkbox ref={(element) => { ref.current[index] = element }} disabled={isDisable} onChange={() => handleClickVariant(index + 1)} /* checked={index + 1 === activeCheckbox} */>{variant}</Checkbox>
                    </li>
                    
                ))}
            </ul>
            
        </div>

    )
}

export default Question;

