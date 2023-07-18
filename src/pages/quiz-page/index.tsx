import Quiz from "components/quiz";
import ErrorComponent from "components/error-page";
import { useAppSelector } from "storage/hook";

function QuizPage() {

    const { error } = useAppSelector(state => state.questions)

    return (
        <>
        {error 
        ? <ErrorComponent title={error}/>
        : <Quiz />}
        </>       
    );
}

export default QuizPage;