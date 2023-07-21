import { TRoutes } from "components/app/App";
import LoginForm from "components/login-form";
import Modal from "components/modal";
import ProtectedRoute from "components/protected-route";
import RegisterForm from "components/register-form";
import HomePage from "pages/home-page";
import NotFoundPage from "pages/not-found-page";
import QuizPage from "pages/quiz-page";
import { useCallback, useEffect, useMemo } from "react";
import { SubmitHandler } from 'react-hook-form';


import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { fetchGetQuestionsSupabase } from "storage/asyncActions/questions-slice";
import { fetchLoginUserSupabase, fetchRegisterUser } from "storage/asyncActions/user-slice";
import { useAppDispatch } from "storage/hook-types";
import { TUserAuthBody, TUserRegisterBody } from "types/api-types";
import { AUTH_LOCAL_STORAGE } from "utils/constants";
import { getLocalData } from "utils/local-storage";

type TApprouterProps = {
    isModal?: boolean,
    routes: TRoutes[]

}

const AppRouter = ({ isModal, routes }: TApprouterProps) => {

    const location = useLocation();
    const initialPath = location.state?.initialPath;
    const backgroundLocation = location.state?.backgroundLocation;      

    switch (isModal) {
        case true: return (
            backgroundLocation &&
            <Routes>
                {routes.map(({ path, element }) => <Route path={path} element={element} key={path} />)}
            </Routes>
        )
        default: return (
            <Routes location={backgroundLocation && { ...backgroundLocation, pathname: initialPath } || location}>
                {routes.map(({ path, element }) => <Route path={path} element={element} key={path} />)}
            </Routes>)

    }
}

export default AppRouter;




