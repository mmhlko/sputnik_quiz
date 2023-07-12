export type TUser = {
    email: string,
    id: string,
    name?: string
}

export type TUserResponce = {
    email: string,
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

type TApiConfig = {
    baseUrl: string;
    headers: any;
}
//тип данных при получении ответа от сервера после авторизации
export type TAuthResponse = {
    user: TUser;
    accessToken: string;
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

export class Api {

    private baseUrl;
    private headers;
    

    constructor({baseUrl, headers}:TApiConfig) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    private onResponce<T>(res: Response): Promise<T> { //метод обрабатывает запросы с сервера при получении ответа с него
        return res.ok ? res.json() : res.json().then(err => Promise.reject(err)) 
    }

    getAllUsers() { //изменение пользователя

        return fetch(`${this.baseUrl}/users`, {
            method: 'GET',
            headers: this.headers,
        })
            .then(this.onResponce<TUser>)
    }    


    register(bodyData:TUserRegisterBody) { //изменение пользователя

        return fetch(`${this.baseUrl}/register`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(bodyData)
        })
            .then(this.onResponce<TAuthResponse>)
            .catch((err) => alert(err)
            )
    }

    authorize(bodyData:TUserAuthBody) { //изменение пользователя

        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(bodyData)
        })
            .then(this.onResponce<TAuthResponse>)
            .catch((err) => alert(err)
            )
    }

    checkToken(token:string) { //изменение пользователя
        return fetch(`${this.baseUrl}/users/me`, {
            headers: {...this.headers, authorization: `Bearer ${token}`}            
        })
            .then(this.onResponce<TAuthResponse>)
            .catch((err) => console.log(err)
            )
    }

    getQuestions(token:string) { //изменение пользователя
        return fetch(`${this.baseUrl}/questions`, {
            headers: {...this.headers, authorization: `Bearer ${token}`}            
        })
            .then(this.onResponce<TQuestionResponse>)
            .catch((err) => console.log(err)
            )
    }




}


const api = new Api({
    baseUrl: 'http://localhost:4000', //далее добавляется эндпоинт
    headers: {
        'content-type': 'application/json',
        //authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwN2UwOWFhMzk3MTIxODM4ZjI4ZWMiLCJncm91cCI6Imdyb3VwLTExIiwiaWF0IjoxNjc4ODAyNDQ4LCJleHAiOjE3MTAzMzg0NDh9.Ij9HtsP55BsI2ukV4SgqqSWxsEjpcJz53Avty8LEgKE',
        
    }

})


export default api;