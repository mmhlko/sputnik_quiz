import { TQuizQuestion } from 'storage/quizData';
import s from './styles.module.scss';
import Question from 'components/question';
import { useAppSelector } from 'storage/hook';
import { SyntheticEvent, useEffect } from 'react';



function Quiz() {

    const questions = useAppSelector(state => state.questions.data);

    function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        
        // Read the form data
        const form:any = e.target;
        const formData:any = new FormData(form);
    
        // You can pass formData as a fetch body directly:
        //fetch('/some-api', { method: form.method, body: formData });
        console.log(formData.entries());
        
        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
      }
    

    return (
        <div className={s.quizWrapper}>
            <h3>Викторина</h3>
            <form method="post" className={s.questions} onSubmit={handleSubmit}>
                {questions.slice(0, 5).map((question) => (
                    <Question key={question.id} question={question} />
                ))}
                 <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
                <button type="submit">Submit form</button>
            </form>



        </div>
    )
}

export default Quiz;