import { Rate, Typography } from "antd"
import { useAppSelector } from "storage/hook-types";
import { questionsSelector, scoreSelector, showResultSelector } from "storage/selectors";
const { Title } = Typography;

export type TQuizResultProps = {
    result: number,
    total: number
}

const STARS_COUNT = 5;

const QuizResult = () => {

    const score = useAppSelector(scoreSelector);
    const { totalQuestions } = useAppSelector(questionsSelector);
    const showResult = useAppSelector(showResultSelector)
    const stars = score / totalQuestions * STARS_COUNT;

    if(showResult) {

        return (
            <>
                <Title level={3}>Ваш результат {score} из {totalQuestions}</Title>
                <Rate disabled allowHalf defaultValue={stars} />
            </>
        )
    }
    
}

export default QuizResult