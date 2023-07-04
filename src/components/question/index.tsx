import { useAppSelector } from 'storage/hook';
import s from './styles.module.scss';
import { TQuizQuestion } from 'storage/quizData';
import { useState } from 'react';


export type TQuestionProps = {
    question: TQuizQuestion,

}

function Question({ question }: TQuestionProps) {    

    const { title, variants, id, answer } = question;

    const handleClickVariant = (variant:number) => {

        if(variant === answer) {
            console.log(true);            
        } else {
            console.log(false);
            
        }
    }

    return (

        <div className={s.wrapper}>
            <h3>{title}</h3>
            <ul className={s.variants}>
                {variants.map((variant, index) => (
                    <li key={index} className={s.variant}>
                        <input type="checkbox" className={s.custom_checkbox} name={`question-${id}`} id={`question-${id}-${index}`} value={index + 1}/>
                        <label className={s.variantLabel} htmlFor={`question-${id}-${index}`}>{variant}</label>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Question;

