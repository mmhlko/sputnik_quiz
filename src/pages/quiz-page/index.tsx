import Quiz from "components/quiz";
import ErrorComponent from "components/error-page";
import { useAppSelector } from "storage/hook";

function QuizPage() {

    const { error, totalQuestions } = useAppSelector(state => state.questions)

    return (
        <>
        {!error && totalQuestions !== 0 
        ? <Quiz />
        : <ErrorComponent title={error} subtitle='Нет данных'/>}
        </>
        
        
    );
}

export default QuizPage;