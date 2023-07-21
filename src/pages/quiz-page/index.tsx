import Quiz from "components/quiz";
import ErrorComponent from "components/error-component";
import { useAppSelector } from "storage/hook-types";

function QuizPage() {

    const { error } = useAppSelector(state => state.questions);

    return (
        <>
            {error
                ? <ErrorComponent title={error} withButton/>
                : <Quiz />
            }
        </>
    );
}

export default QuizPage;