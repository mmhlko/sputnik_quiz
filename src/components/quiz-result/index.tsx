import { Rate, Typography } from "antd"
const { Title } = Typography;

export type TQuizResultProps = {
    result: number,
    total: number
}

function QuizResult({ result, total }: TQuizResultProps) {

    const stars = result / total * 5

    return (
        <>
            <Title level={3}>Ваш результат {result} из {total}</Title>
            <Rate disabled allowHalf defaultValue={stars} />
        </>
    )
}

export default QuizResult