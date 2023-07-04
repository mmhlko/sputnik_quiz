import { TQuizQuestion } from 'storage/quizData';
import s from './styles.module.scss';
import Question from 'components/question';
import { useAppSelector } from 'storage/hook';
import { SyntheticEvent, useEffect, useState } from 'react';
import { log } from 'console';



function Quiz() {

    const questions = useAppSelector(state => state.questions.data);
    const [userAnswers, setUserAnswers] = useState() 

    function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        // Prevent the browser from reloading the page
        e.preventDefault();


        
    }  
    


    return (
        <div className={s.quizWrapper}>
            <h3>Викторина</h3>
            <form className={s.questions} onSubmit={handleSubmit}>
                {questions.slice(0, 5).map((question) => (
                    <Question key={question.id} question={question} />
                ))}
                
                <button type="submit">Submit form</button>
            </form>



        </div>
    )
}

export default Quiz;