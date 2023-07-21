import Quiz from "components/quiz";
import ErrorComponent from "components/error-component";
import { useAppSelector } from "storage/hook-types";

function QuizPage() {

    const { error, loading, totalQuestions } = useAppSelector(state => state.questions);

    return (
        <>
            {!loading && (error || totalQuestions === 0)
                ? <ErrorComponent title={error} withButton/>
                : <Quiz />
            }
        </>
    );
}

export default QuizPage;