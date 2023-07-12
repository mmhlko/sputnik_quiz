import { Button } from 'antd';
import s from './styles.module.scss'
import { useAppDispatch, useAppSelector } from 'storage/hook';
import { UserOutlined } from '@ant-design/icons';
import { fetchLoginUser } from 'storage/asyncActions/user-slice';
import { useNavigate } from 'react-router-dom';
import { userLogout } from 'storage/actions/user-actions';


function UserBlock() {

    const user = useAppSelector(state => state.user.data);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const loginFn = () => {
        navigate('/login')
    }

    const logoutFn = () => {
        dispatch(userLogout())
    }

    return ( 
        <div className={s.userBlock}>            
            {user?.email && <span><UserOutlined className={s.userIcon}/>{user.email}</span>}            

            {!user 
                ? <Button type='primary' onClick={loginFn}>Войти</Button>
                : <Button type='primary' onClick={logoutFn}>Выйти</Button>}

        </div>
     );
}

export default UserBlock;

