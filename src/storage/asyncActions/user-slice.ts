import { Dispatch } from "react"
import { Middleware } from "redux"
import { TRegisterAction, authCheck, authorizeAction, registerAction } from "storage/actions/user-actions"
import { useAppDispatch } from "storage/hook"
import api, { TAuthResponse, TUserRegisterBody, TUserResponce } from "utils/api"
import { setLocalData } from "utils/local-storage"


export const fetchRegisterUser = (dataForm: TUserRegisterBody):any => {
    
    return (dispatch:Dispatch<TRegisterAction>) => {
        api.register(dataForm)
            .then((data:TAuthResponse) => {
                dispatch(registerAction(data.user))
            })
    }
}

export const fetchLoginUser = (dataForm: TUserRegisterBody):any => {

    return (dispatch:Dispatch<TRegisterAction>) => {
        api.authorize(dataForm)
            .then((data:TAuthResponse) => {
                if(data?.accessToken) {
                    setLocalData('accessToken', data.accessToken)
                    setLocalData('user', data.user)
                    dispatch(authorizeAction(data.user))
                    
                }
            })
            .finally(() => {dispatch(authCheck())})
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