import { Dispatch } from "react"
import { Middleware } from "redux"
import { TQuizDataAction } from "storage/actions/quizData-actions"
import { TResultAction, resetAction } from "storage/actions/quizGame-actions"
import { TRegisterAction, authCheck, authorizeAction, registerAction, userLogout } from "storage/actions/user-actions"
import { useAppDispatch } from "storage/hook"
import api, { TAuthResponse, TUserRegisterBody, TUserResponce } from "utils/api"
import { setLocalData } from "utils/local-storage"


export const fetchRegisterUser = (dataForm: TUserRegisterBody):any => {
    
    return (dispatch:Dispatch<TRegisterAction>) => {
        api.userRegister(dataForm)
            .then((data) => {
                dispatch(registerAction(data.user))
            })
    }
}


export const fetchLoginUserSupabase = (dataForm: TUserRegisterBody):any => {

    return (dispatch:Dispatch<TRegisterAction>) => {
        api.userLogin(dataForm)
            .then((data) => {
                dispatch(authorizeAction(data.user))                   
            })
            .finally(() => {dispatch(authCheck())})
    }
}


export const fetchUserLogout = ():any => {    

    return (dispatch:Dispatch<TResultAction>) => {
        dispatch(userLogout())
        dispatch(resetAction())
        api.userLogout()    
    }
}

// export const fetchCheckToken = () => {
    
//     return (dispatch:Dispatch<TRegisterAction>) => {
//         api.authorize(dataForm)
//             .then((data:TAuthResponse) => {
//                 setLocalData('accessToken', data.accessToken)
//                 dispatch(authorizeAction(data.user))
//             })
//     }
// }