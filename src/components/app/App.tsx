import { ReactNode, useEffect } from 'react';
import { useAppDispatch } from 'storage/hook-types';
import { Layout } from 'antd';
import ProtectedRoute from 'components/protected-route';
import Header from 'components/header';
import { useNavigate, useLocation } from 'react-router-dom';
import LoginForm from 'components/login-form';
import { SubmitHandler } from 'react-hook-form';
import RegisterForm from 'components/register-form';
import { getUser } from 'storage/actions/user-actions';
import { fetchLoginUserSupabase, fetchRegisterUser } from 'storage/asyncActions/user-slice';
import { getLocalData } from 'utils/local-storage';
import { fetchGetQuestionsSupabase } from 'storage/asyncActions/questions-slice';
import HomePage from 'pages/home-page';
import Modal from 'components/modal';
import QuizPage from 'pages/quiz-page';
import NotFoundPage from 'pages/not-found-page';
import { AUTH_LOCAL_STORAGE, homePAth, loginPAth, quizPAth, registerPAth } from 'utils/constants';
import { TUserAuthBody, TUserRegisterBody } from 'types/api-types';
import AppRouter from 'components/app-router';
import { User } from '@supabase/supabase-js';
const { Footer } = Layout;

export type TRoutes = {
    path: string,
    element: ReactNode
}

export function App() {

    const dispatch = useAppDispatch();
    const location = useLocation();
    const initialPath = location.state?.initialPath;
    const navigate = useNavigate();

    const token:string = getLocalData(AUTH_LOCAL_STORAGE)?.access_token;    
    const userFromLS:User = getLocalData(AUTH_LOCAL_STORAGE)?.user;

    const getQuestions = () => {
        if (token) {
            dispatch(fetchGetQuestionsSupabase())
        }
    }

    const getUserFromLS = () => {
        if (userFromLS) {
            dispatch(getUser(userFromLS));
        }
    }

    useEffect(() => {
        getUserFromLS();
        getQuestions();        
    }, [token, dispatch])

    //закрытие модального окна ведет на страницу открытия модального окна или на главную
    const onCloseRoutingModal = () => {
        navigate(initialPath || homePAth, { replace: true }) //вторым полем удаляем из истории переход обратно
    }

    const cbSubmitFormRegister: SubmitHandler<TUserRegisterBody> = (dataForm) => {
        dispatch(fetchRegisterUser(dataForm))
    }
    const cbSubmitFormLogin: SubmitHandler<TUserAuthBody> = (dataForm) => {
        dispatch(fetchLoginUserSupabase(dataForm))
    }
    const handleClickNavigate = (to: string) => {
        navigate(to)
    }
    //добавляем подложку под модалку backgroundLocation и удаляем переход из истории
    const handleClickNavigateModal = (to: string) => {
        navigate(to, { replace: true, state: { backgroundLocation: { ...location, state: null }, initialPath } })
    }

    const mainRoutes: TRoutes[] = [
        { path: homePAth, element: <HomePage /> },
        { path: quizPAth, element: <ProtectedRoute><QuizPage /></ProtectedRoute> },
        { path: loginPAth, element: <ProtectedRoute onlyOnAuth><LoginForm onSubmit={cbSubmitFormLogin} onNavigate={handleClickNavigate} /></ProtectedRoute> },
        { path: registerPAth, element: <ProtectedRoute onlyOnAuth><RegisterForm onSubmit={cbSubmitFormRegister} onNavigate={handleClickNavigate} /></ProtectedRoute> },
        { path: '*', element: <NotFoundPage /> },
    ]

    const modalRoutes: TRoutes[] = [
        {
            path: registerPAth,
            element: <ProtectedRoute onlyOnAuth>
                <Modal isOpen={true} onClose={onCloseRoutingModal} >
                    <RegisterForm onSubmit={cbSubmitFormRegister} onNavigate={handleClickNavigateModal} />
                </Modal>
            </ProtectedRoute>
        },
        {
            path: loginPAth,
            element: <ProtectedRoute onlyOnAuth>
                <Modal isOpen={true} onClose={onCloseRoutingModal} >
                    <LoginForm onSubmit={cbSubmitFormLogin} onNavigate={handleClickNavigateModal} />
                </Modal>
            </ProtectedRoute>
        },
        { path: '*', element: null },]


    return (
        <>
            <Header />
            <main className='container'>
                <AppRouter routes={mainRoutes} />
            </main>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Maxim Mikhaylenko</Footer>
            <AppRouter isModal routes={modalRoutes} />
        </>
    );
}