import { Dispatch } from "redux";
import { resetAction } from "storage/actions/quizGame-actions";
import { authCheck, authorizeAction, isUserLoading, registerAction, userError, userLogout } from "storage/actions/user-actions";
import { TEmptyAction, UserActions } from "types/actions";
import { TUserAuthBody, TUserRegisterBody } from "types/api-types";
import api from "utils/api";



export const fetchRegisterUser = (dataForm: TUserRegisterBody):any => {
    
    return (dispatch:Dispatch<UserActions>) => {
        dispatch(isUserLoading(true))
        api.userRegister(dataForm)
            .then((data) => {
                dispatch(registerAction(data.user))
            })
            .catch(err => dispatch(userError(err.toString())))
            .finally(() => dispatch(isUserLoading(false)))
    }
}

export const fetchLoginUserSupabase = (dataForm: TUserAuthBody):any => {

    return (dispatch:Dispatch<UserActions>) => {
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

export const fetchUserLogout = ():any => {    

    return (dispatch:Dispatch<TEmptyAction>) => {
        dispatch(userLogout())
        dispatch(resetAction())
        api.userLogout()    
    }
}

//пока в разработке
// export const fetchCheckToken = () => {
    
//     return (dispatch:Dispatch<TRegisterAction>) => {
//         api.authorize(dataForm)
//             .then((data:TAuthResponse) => {
//                 setLocalData('accessToken', data.accessToken)
//                 dispatch(authorizeAction(data.user))
//             })
//     }
// }