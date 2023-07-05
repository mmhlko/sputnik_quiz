import s from "./styles.module.scss"

export type TQuizResultProps = {
    result: number,
    total: number
}

function QuizResult ({result, total}:TQuizResultProps) {    

        return (
        <>
        <h2 className={s.text}>Ваш результат {result} из {total}</h2>        
        </>
    )
}

export default QuizResult