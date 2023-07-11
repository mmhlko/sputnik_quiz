export type TUser = {
    email: string,
    password: string,
    id: string
}

//тип данных при авторизации
export type TUserAuthBody = {
    email: string,
    password: string,
}

export type TUserRegisterBody = {
    //some reg types
} & TUserAuthBody

type TApiConfig = {
    baseUrl: string;
    headers: any;
}
//тип данных при получении ответа от сервера после авторизации
export type TAuthResponseDto = {
    data: TUser;
    token: string;
}


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
            .then(this.onResponce<TUser>)
            .catch((err) => console.log(err)
            )
    }

    authorize(bodyData:TUserAuthBody) { //изменение пользователя

        return fetch(`${this.baseUrl}/signin`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(bodyData)
        })
            .then(this.onResponce<TAuthResponseDto>)
    }

    checkToken(token:string) { //изменение пользователя
        return fetch(`${this.baseUrl}/users/me`, {
            headers: {...this.headers, authorization: `Bearer ${token}`}            
        })
            .then(this.onResponce<TAuthResponseDto>)
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