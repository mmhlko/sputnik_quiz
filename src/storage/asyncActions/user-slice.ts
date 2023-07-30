import { Dispatch } from "react";
import { resetAction } from "storage/actions/quizGame-actions";
import { authCheck, authorizeAction, isUserLoading, registerAction, userError, userLogout } from "storage/actions/user-actions";
import { TUserActions } from "types/actions";
import { TUserAuthBody, TUserRegisterBody } from "types/api-types";
import { TAsyncLoginThunk, TAsyncLogoutThunk, TAsyncRegisterThunk } from "types/thunks";
import api from "utils/api";

export const fetchRegisterUser = (dataForm: TUserRegisterBody):TAsyncRegisterThunk => {
    
    return (dispatch: Dispatch<TUserActions>) => {
        dispatch(isUserLoading(true));
        api.userRegister(dataForm)
            .then((data) => {
                dispatch(registerAction(data.user.aud))
            })
            .catch(err => dispatch(userError(err.toString())))
            .finally(() => dispatch(isUserLoading(false)))            
    }
}

export const fetchLoginUserSupabase = (dataForm: TUserAuthBody):TAsyncLoginThunk => {

    return (dispatch: Dispatch<TUserActions>) => {
        dispatch(isUserLoading(true))
        api.userLogin(dataForm)
            .then((data) => {
                dispatch(authorizeAction(data.user))                   
            })
            .catch(err => dispatch(userError(err.toString())))
            .finally(() => {
                dispatch(isUserLoading(false))
                dispatch(authCheck())
            })
    }
}

export const fetchUserLogout = ():TAsyncLogoutThunk=> {    

    return (dispatch) => {
        dispatch(resetAction())
        dispatch(userLogout())
        api.userLogout()        
    }
}

