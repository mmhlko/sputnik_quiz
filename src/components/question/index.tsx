import { useAppDispatch } from 'storage/hook';
import s from './styles.module.scss';
import { TQuizQuestion } from 'storage/quizData';
import { useEffect, useState } from 'react';
import { decrementAction, incrementAction } from 'storage/actions/counter-actions';


export type TQuestionProps = {
    question: TQuizQuestion,

}

function Question({ question }: TQuestionProps) {    

    const [activeCheckbox, setActiveCheckbox] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const { title, variants, id, correctAnswer } = question;
    const dispatch = useAppDispatch();
    
    

    const handleClickVariant = (variant:number) => {        

        if(variant + 1 === correctAnswer) {
            console.log('correctAnswer :', correctAnswer);
            console.log('variant :', variant + 1);
            
            if (activeCheckbox + 1 === correctAnswer) {
                console.log('activeCheckbox === correctAnswer');
                
                return
            } else {
                dispatch(incrementAction(1))
            }
        } else {
            if (activeCheckbox + 1 !== correctAnswer) {
                console.log('activeCheckbox === correctAnswer');                
                return
            } else {
                dispatch(decrementAction(1))
            }
        }              
    }       
​

    return (

        <div className={s.wrapper}>
            <h3>{title}</h3>
            <p>activeCheckbox {activeCheckbox}</p>
            <ul className={s.variants}>
                {variants.map((variant, index) => (
                    <li key={index} className={s.variant}>
                        <input onChange={() => setActiveCheckbox(index)} checked={index === activeCheckbox} type="checkbox" className={s.custom_checkbox} name={`question-${id}`} id={`question-${id}-${index}`} value={index + 1}/>
                        <label className={s.variantLabel} htmlFor={`question-${id}-${index}`} onClick={() => handleClickVariant(index)}>{variant}</label>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Question;

