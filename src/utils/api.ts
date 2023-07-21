import { TUserAuthBody, TUserRegisterBody } from "types/api-types";
import supabase from "../supabase";

export class Api {

    userRegister = async (bodyData: TUserRegisterBody) => {

        const { data, error } = await supabase
            .auth.signUp(bodyData)
        
            if(error) {
                throw new Error(error.message.toString())
            }            
            return data   
    }

    userLogin = async (bodyData: TUserAuthBody) => {
        
        const { data, error } = await supabase
            .auth.signInWithPassword(bodyData)
        
            if(error) { 
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

            if(error || data.length === 0) {
                const err = error || 'Нет данных'
                throw new Error(err.toString())
            }            
            
            return data           
        }       
}

const api = new Api();
export default api;


//для расширения функционала
/*  const { data, error } = supabase.auth.setSession({
    access_token,
    refresh_token
  }) */
