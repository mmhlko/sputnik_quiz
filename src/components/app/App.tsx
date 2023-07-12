import { useEffect, useState } from 'react';
import { getQuestionsAction } from 'storage/actions/quizData-actions';
import { useAppDispatch } from 'storage/hook';
import { quizData } from 'storage/quizData';
import Quiz from 'components/quiz';
import HeaderBlock from 'components/header';
import { Button, Layout } from 'antd';
import ProtectedRoute from 'components/protected-route';
import Header from 'components/header';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginForm from 'components/login-form';
import { TUserDTO } from 'storage/redusers/user-reducer';
import { SubmitHandler } from 'react-hook-form';
import RegisterForm from 'components/register-form';
import api, { TUser, TUserAuthBody, TUserRegisterBody, TUserResponce,  } from 'utils/api';
import { getUser, registerAction } from 'storage/actions/user-actions';
import { fetchLoginUser, fetchRegisterUser } from 'storage/asyncActions/user-slice';
import { getLocalData } from 'utils/local-storage';
import { fetchGetQuestions } from 'storage/asyncActions/questions-slice';



const { Footer } = Layout;

export function App() {

    const dispatch = useAppDispatch();
    const [onlyOnAuth, setOnlyOnAuth] = useState(true)
    const navigate = useNavigate();

    
    

    useEffect(() => {
        const token:string = getLocalData('accessToken');
        const userFromLS:TUser = getLocalData('user')
        dispatch(getUser(userFromLS))
        if(token) {
            dispatch(fetchGetQuestions(token))
        }
        
    }, [])

    // useEffect(() => { //когда 2 диспатча идут друг за другом, она асинхронные и возвращаются данные кто вперед, если сделать через then то они выполняются по очереди
    //     const token = getLocalData('token')

    //     dispatch(fetchCheckToken(token)) //диспатч возвращает промис, поэтому можно применить then
    //       .then(() => {
    //         if (token) {        
    //           dispatch(fetchProducts())
    //         }
           
    //       })   
        
    //   }, [dispatch, token])

    const cbSubmitFormRegister: SubmitHandler<TUserRegisterBody> = (dataForm) => {        

        dispatch(fetchRegisterUser(dataForm))
    }
    const cbSubmitFormLogin: SubmitHandler<TUserAuthBody> = (dataForm) => {
        // console.log('cbSubmitFormLogin', dataForm);
        dispatch(fetchLoginUser(dataForm))
        //dispatch(fetchLoginUser(dataForm))        
    }
    const handleClickNavigate = (to: string) => {
        navigate(to)

    }    

        return (
            <>
                <Header />
                <main className='container'>
                    <Routes>
                        <Route path='/' element={<ProtectedRoute ReplaceElement={<Button type='link' href='/login'>Авторизироваться</Button>}><Quiz /></ProtectedRoute>} />
                        <Route path='/login' element={<ProtectedRoute onlyOnAuth><LoginForm onSubmit={cbSubmitFormLogin} onNavigate={handleClickNavigate} /></ProtectedRoute>} />
                        <Route path='/register' element={<ProtectedRoute onlyOnAuth><RegisterForm onSubmit={cbSubmitFormRegister} onNavigate={handleClickNavigate} /></ProtectedRoute>} />
                        <Route path='*' element={<h2>NOT FOUNT PAGE</h2>} />
                    </Routes>

                </main>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </>
        );
    }