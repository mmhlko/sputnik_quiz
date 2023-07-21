import { Dispatch } from "redux";
import { resetAction } from "storage/actions/quizGame-actions";
import { authCheck, authorizeAction, registerAction, userLogout } from "storage/actions/user-actions";
import { TEmptyAction, TQuizGameActions, TUserActions } from "types/actions";
import { TUserAuthBody, TUserRegisterBody } from "types/api";
import api from "utils/api-types";

export const fetchRegisterUser = (dataForm: TUserRegisterBody):any => {
    
    return (dispatch:Dispatch<TUserActions>) => {
        api.userRegister(dataForm)
            .then((data) => {
                dispatch(registerAction(data.user))
            })
    }
}

export const fetchLoginUserSupabase = (dataForm: TUserAuthBody):any => {

    return (dispatch:Dispatch<TUserActions>, dispatchWithoutArg:Dispatch<TUserActions>) => {
        api.userLogin(dataForm)
            .then((data) => {
                dispatch(authorizeAction(data.user))                   
            })
            .finally(() => {dispatchWithoutArg(authCheck())})
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