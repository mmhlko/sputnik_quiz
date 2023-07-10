import { useEffect, useState } from 'react';
import { getQuestionsAction } from 'storage/actions/quizData-actions';
import { useAppDispatch } from 'storage/hook';
import { quizData } from 'storage/quizData';
import Quiz from 'components/quiz';
import HeaderBlock from 'components/header';
import { Layout } from 'antd';
import ProtectedRoute from 'components/protected-route';
import Header from 'components/header';



const {Footer } = Layout;

export function App() {

    const dispatch = useAppDispatch();
    const [onlyUnAuth, setOnlyUnAuth] = useState(true)

    useEffect(() => {
        dispatch(getQuestionsAction(quizData))
    }, [])

    return (
        <>
            <Header />
            <main className='container'>
                <button onClick={() => setOnlyUnAuth(!onlyUnAuth)}>Включить</button>
                <ProtectedRoute onlyUnAuth={onlyUnAuth}><Quiz /></ProtectedRoute>               
                
            </main>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </>
    );
}