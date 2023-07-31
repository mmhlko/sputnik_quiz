import React, { ReactNode, useEffect } from 'react';
import { useAppDispatch } from 'storage/hook-types';
import { Layout } from 'antd';
import Header from 'components/header';
import { useNavigate, useLocation } from 'react-router-dom';
import { getUser } from 'storage/actions/user-actions';
import { getLocalData } from 'utils/local-storage';
import { fetchGetQuestionsSupabase } from 'storage/asyncActions/questions-slice';
import { AUTH_LOCAL_STORAGE } from 'utils/constants';
import AppRouter from 'components/app-router';
import { User } from '@supabase/supabase-js';
const { Footer } = Layout;

export type TRoutes = {
    path: string,
    element: ReactNode
}

const App = () => {

    const dispatch = useAppDispatch();
    const location = useLocation();
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


    return (
        <>
            <Header />
            <main className='container'>
                <AppRouter location={location}/>
            </main>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Maxim Mikhaylenko</Footer>
            <AppRouter isModal location={location} />
        </>
    );
}

export default React.memo(App);