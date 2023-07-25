import { Dispatch } from "react";
import { authCheck, refreshTokenAction, userError } from "storage/actions/user-actions";
import { TUserActions } from "types/actions";
import { TAsyncRefreshTokenThunk } from "types/thunks";
import api, { TAuthResponse } from "utils/api";

export const fetchRefreshTokenSupabase = (refresh_token:string):TAsyncRefreshTokenThunk => {

    return (dispatch: Dispatch<TUserActions>) => {
        api.refreshToken(refresh_token)
            .then((data: TAuthResponse) => {                
                dispatch(refreshTokenAction(data.user))                   
            })
            .catch(err => dispatch(userError(err.toString())))
            .finally(() => {
                dispatch(authCheck())
            })
    }
}

