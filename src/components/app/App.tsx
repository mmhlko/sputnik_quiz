import { useEffect } from 'react';
import { useAppDispatch } from 'storage/hook';
import { Layout } from 'antd';
import ProtectedRoute from 'components/protected-route';
import Header from 'components/header';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LoginForm from 'components/login-form';
import { SubmitHandler } from 'react-hook-form';
import RegisterForm from 'components/register-form';
import api, { TUser, TUserAuthBody, TUserRegisterBody} from 'utils/api';
import { getUser } from 'storage/actions/user-actions';
import { fetchLoginUser, fetchRegisterUser } from 'storage/asyncActions/user-slice';
import { getLocalData } from 'utils/local-storage';
import { fetchGetQuestions } from 'storage/asyncActions/questions-slice';
import HomePage from 'pages/home-page';
import Modal from 'components/modal';
import QuizPage from 'pages/quiz-page';
import supabase from 'subabase'
/* import ErrorPage from 'pages/error-page'; */


const { Footer } = Layout;

export function App() {

    const dispatch = useAppDispatch();
    //routing + modal
    const location = useLocation();
    const backgroundLocation = location.state?.backgroundLocation;
    const initialPath = location.state?.initialPath;
    const navigate = useNavigate();




    //закрытие модального окна ведет на страницу открытия модального окна или на главную
    const onCloseRoutingModal = () => {
        navigate(initialPath || '/', { replace: true }) //вторым полем удаляем из истории переход обратно
    }

    const token: string = getLocalData('accessToken');
    const userFromLS: TUser = getLocalData('user');   

    /* api.authorize({email: 'fdsfds', password: 'fdsfs'}) */
    
    useEffect(() => {

        dispatch(getUser(userFromLS))
        if (token) {
            dispatch(fetchGetQuestions(token))  
        }               

    }, [token, dispatch])


    useEffect(() => {
        const fetchQuestions = async () => {
            
        let { data: questions, error } = await supabase
            .from('questions')
            .select()


            if(error) {
                console.log(error)                
            }            
            if(questions) {
                console.log(questions)                
            }             
        }

        fetchQuestions()
    } ,[])


       

    const cbSubmitFormRegister: SubmitHandler<TUserRegisterBody> = (dataForm) => {
        dispatch(fetchRegisterUser(dataForm))
    }
    const cbSubmitFormLogin: SubmitHandler<TUserAuthBody> = (dataForm) => {
        dispatch(fetchLoginUser(dataForm))
    }
    const handleClickNavigate = (to: string) => {
        navigate(to)

    }
    //добавляем подложку под модалку backgroundLocation и удаляем переход из истории
    const handleClickNavigateModal = (to: string) => {
        navigate(to, { replace: true, state: { backgroundLocation: { ...location, state: null }, initialPath } })
    }

    const mainRoutes = [
        { path: '/', element: <HomePage /> },
        { path: '/quiz', element: <ProtectedRoute><QuizPage /></ProtectedRoute>, errorElement: <h2>ОШИБКА !!! </h2>},
        { path: '/login', element: <ProtectedRoute onlyOnAuth><LoginForm onSubmit={cbSubmitFormLogin} onNavigate={handleClickNavigate} /></ProtectedRoute> },
        { path: '/register', element: <ProtectedRoute onlyOnAuth><RegisterForm onSubmit={cbSubmitFormRegister} onNavigate={handleClickNavigate} /></ProtectedRoute> },
        { path: '*', element: <h2>NOT FOUNT PAGE</h2> },
    ]

    const modalRoutes = [
        {
            path: '/register',
            element:    <ProtectedRoute onlyOnAuth>
                            <Modal isOpen={true} onClose={onCloseRoutingModal} >
                                <RegisterForm onSubmit={cbSubmitFormRegister} onNavigate={handleClickNavigateModal} />
                            </Modal>
                        </ProtectedRoute>
        },
        {
            path: '/login',
            element:    <ProtectedRoute onlyOnAuth>
                            <Modal isOpen={true} onClose={onCloseRoutingModal} >
                                <LoginForm onSubmit={cbSubmitFormLogin} onNavigate={handleClickNavigateModal} />
                            </Modal>
                        </ProtectedRoute>
        },
        { path: '*', element: null },
    ]
    

    
    return (
        <>
            <Header />
            <main className='container'>
                <Routes location={backgroundLocation && { ...backgroundLocation, pathname: initialPath } || location}>
                    {mainRoutes.map(({ path, element }) => <Route path={path} element={element} key={path} />)}
                </Routes>
            </main>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            {backgroundLocation &&
                <Routes>
                    {modalRoutes.map(({ path, element }) => <Route path={path} element={element} key={path} />)}
                </Routes>
            }
        </>
    );
}