import { TUserAuthBody, TUserRegisterBody } from "types/api-types";
import supabase from "../supabase";
import { User } from "@supabase/supabase-js";

type TApiConfig = {
    baseUrl: string;
    headers: any
}

export type TAuthResponse = {
    access_token: string,
    expires_in: number,
    refresh_token: string,
    token_type: string,
    user: User
}

export class Api {

    private baseUrl;
    private headers;

    constructor({ baseUrl, headers }: TApiConfig) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    private onResponce<T>(res: Response): Promise<T> { //метод обрабатывает запросы с сервера при получении ответа с него
        if (!res.ok) {
            throw new Error(`${res.status} - ${res.statusText}`);
        } else {
            return res.json()
        }
    }

    userRegister = async (bodyData: TUserRegisterBody) => {

        const { data, error } = await supabase
            .auth.signUp(bodyData)

        if (error) {
            throw new Error(error.message.toString())
        }
        return data
    }

    userLogin = async (bodyData: TUserAuthBody) => {
        const { data, error } = await supabase.auth.signInWithPassword(bodyData)
        if (error) {
            throw new Error(error.message.toString())
        }
        return data
    }

    userLogout = async () => {
        await supabase.auth.signOut()
    }

    fetchQuestions = async () => {

        const { data, error } = await supabase
            .from('questions')
            .select()
        if (error || data.length === 0) {
            const err = error.message || 'Нет данных'
            throw new Error(err.toString())
        }

        return data
    }

    refreshToken(refresh_token: string) {
        return fetch(`${this.baseUrl}/auth/v1/token?grant_type=refresh_token`, {
            method: 'POST',
            headers: { ...this.headers },
            body: JSON.stringify({ refresh_token: refresh_token })
        })
            .then(this.onResponce<TAuthResponse>)
            .catch((err) => alert(err)
            )
    }
}

const api = new Api({
    baseUrl: process.env.REACT_APP_SUBABASE_URL,
    headers: {
        apikey: process.env.REACT_APP_ANON_KEY
    }
})
export default api;


