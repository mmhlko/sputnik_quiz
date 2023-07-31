import { TRoutes } from "components/app/App";
import LoginForm from "components/login-form";
import ProtectedRoute from "components/protected-route";
import RegisterForm from "components/register-form";
import HomePage from "pages/home-page";
import NotFoundPage from "pages/not-found-page";
import QuizPage from "pages/quiz-page";
import React, { useCallback } from "react";
import { Location, Route, Routes, useNavigate } from "react-router-dom";
import { fetchLoginUserSupabase, fetchRegisterUser } from "storage/asyncActions/user-slice";
import { useAppDispatch } from "storage/hook-types";
import { TUserAuthBody, TUserRegisterBody } from "types/api-types";
import { homePath, loginPath, quizPath, registerPath } from "utils/constants";
import { SubmitHandler } from 'react-hook-form';
import Modal from "components/modal";

type TApprouterProps = {
    isModal?: boolean,
    location?: Location    
}

const AppRouter = ({ isModal, location }: TApprouterProps) => {

    const initialPath = location.state?.initialPath;
    const backgroundLocation = location.state?.backgroundLocation;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    //закрытие модального окна ведет на страницу открытия модального окна или на главную
    const onCloseRoutingModal = () => {
        navigate(initialPath || homePath, { replace: true }) //вторым полем удаляем из истории переход обратно
    }

    const cbSubmitFormRegister: SubmitHandler<TUserRegisterBody> = useCallback((dataForm) => {
        dispatch(fetchRegisterUser(dataForm))
    }, [])
    const cbSubmitFormLogin: SubmitHandler<TUserAuthBody> = useCallback((dataForm) => {
        dispatch(fetchLoginUserSupabase(dataForm))
    }, [])
    const handleClickNavigate = (to: string) => {
        navigate(to)
    }
    //добавляем подложку под модалку backgroundLocation и удаляем переход из истории
    const handleClickNavigateModal = (to: string) => {
        navigate(to, { replace: true, state: { backgroundLocation: { ...location, state: null }, initialPath } })
    }
    
    const mainRoutes: TRoutes[] = [
        { path: homePath, element: <HomePage /> },
        { path: quizPath, element: <ProtectedRoute><QuizPage /></ProtectedRoute> },
        { path: loginPath, element: <ProtectedRoute onlyOnAuth><LoginForm onSubmit={cbSubmitFormLogin} onNavigate={handleClickNavigate} /></ProtectedRoute> },
        { path: registerPath, element: <ProtectedRoute onlyOnAuth><RegisterForm onSubmit={cbSubmitFormRegister} onNavigate={handleClickNavigate} /></ProtectedRoute> },
        { path: '*', element: <NotFoundPage /> }
    ]

    const modalRoutes: TRoutes[] = [
        {
            path: registerPath,
            element: <ProtectedRoute onlyOnAuth>
                <Modal isOpen={true} onClose={onCloseRoutingModal} >
                    <RegisterForm onSubmit={cbSubmitFormRegister} onNavigate={handleClickNavigateModal} />
                </Modal>
            </ProtectedRoute>
        },
        {
            path: loginPath,
            element: <ProtectedRoute onlyOnAuth>
                <Modal isOpen={true} onClose={onCloseRoutingModal} >
                    <LoginForm onSubmit={cbSubmitFormLogin} onNavigate={handleClickNavigateModal} />
                </Modal>
            </ProtectedRoute>
        },
        { path: '*', element: null }
    ]

    switch (isModal) {
        case true: return (
            backgroundLocation &&
            <Routes>
                {modalRoutes.map(({ path, element }) => <Route path={path} element={element} key={path} />)}
            </Routes>
        )
        default: return (
            <Routes location={backgroundLocation && { ...backgroundLocation, pathname: initialPath } || location}>
                {mainRoutes.map(({ path, element }) => <Route path={path} element={element} key={path} />)}
            </Routes>)
    }
}

export default React.memo(AppRouter);




