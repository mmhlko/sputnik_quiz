import ErrorComponent from "components/error-component";
import { useAppSelector } from "storage/hook-types";
import { questionsSelector } from "storage/selectors";
import { Suspense, lazy } from "react";
import Spiner from "components/spiner";

const QuizLazy = lazy(() => import( "components/quiz"));

const QuizPage = () => {

    const { error, loading, totalQuestions } = useAppSelector(questionsSelector);  

    return (
        <>
            {!loading && (error || totalQuestions === 0)
                ? <ErrorComponent title={error} withButton />
                : <Suspense fallback={<Spiner />}>
                    <QuizLazy/>
                </Suspense>
            }            
        </>
    );
}

export default QuizPage;