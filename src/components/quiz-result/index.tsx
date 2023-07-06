import { Rate } from "antd"
import s from "./styles.module.scss"

export type TQuizResultProps = {
    result: number,
    total: number
}

function QuizResult({ result, total }: TQuizResultProps) {

    const stars = result / total * 5

    return (
        <div>
            <h2 className={s.text}>Ваш результат {result} из {total}</h2>
            <Rate disabled allowHalf defaultValue={stars} />
        </div>
    )
}

export default QuizResult