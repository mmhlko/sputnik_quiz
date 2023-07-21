export type TUser = {
    email: string,
    id: string,
    name?: string
}

export type TUserResponce = {
    email?: string,
    id: string,
    name?: string
}

//тип данных при авторизации
export type TUserAuthBody = {
    email: string,
    password: string,
}

export type TUserRegisterBody = {
    email: string,
    password: string,
}

//тип вопроса квиза
export type TQuestion = {
    title: string,
    variants: string[],
    correctAnswer: number,
    id: number
}

//тип ответа от бд для списка вопросов
export type TQuestionResponse = TQuestion[];