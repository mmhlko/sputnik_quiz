import { ThunkAction } from "redux-thunk"
import { RootState } from "storage/redux-types"
import { TLogoutActions, TUserActions } from "./actions"

export type TAsyncRegisterThunk = ThunkAction<void, RootState, unknown, TUserActions>
export type TAsyncLoginThunk = ThunkAction<void, RootState, unknown, TUserActions>
export type TAsyncRefreshTokenThunk = ThunkAction<void, RootState, unknown, TUserActions>
export type TAsyncLogoutThunk = ThunkAction<void, RootState, null, TLogoutActions>