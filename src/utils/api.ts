import supabase from "../supabase"

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

    userRegister = async (bodyData: TUserRegisterBody) => {

        const { data, error } = await supabase
            .auth.signUp(bodyData)
        
            if(error) {
                throw new Error(error.toString())
            }            
            return data   
    }


    userLogin = async (bodyData: TUserAuthBody) => {
        
        const { data, error } = await supabase
            .auth.signInWithPassword(bodyData)
        
            if(error) {
                throw new Error(error.toString())
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

            if(error || data.length === 0) {
                const err = error || 'Нет данных'
                throw new Error(err.toString())
            }            
            
            return data           
        }

        
}


const api = new Api()


export default api;


//для расширения функционала
/*  const { data, error } = supabase.auth.setSession({
    access_token,
    refresh_token
  }) */
