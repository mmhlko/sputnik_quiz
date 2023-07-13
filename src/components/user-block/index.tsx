import { Button } from 'antd';
import s from './styles.module.scss'
import { useAppDispatch, useAppSelector } from 'storage/hook';
import { UserOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { userLogout } from 'storage/actions/user-actions';
import { Link } from 'react-router-dom';
import { resetAction } from 'storage/actions/quizGame-actions';


function UserBlock() {

    const user = useAppSelector(state => state.user.data);
    const dispatch = useAppDispatch();
    const location = useLocation();

    const logoutFn = () => {
        dispatch(userLogout());
        dispatch(resetAction());
    }

    return ( 
        <div className={s.userBlock}>            
            {user?.email && <span><UserOutlined className={s.userIcon}/>{user.email}</span>}            

            {!user 
                ? <Link replace to={'/login'}  state={{backgroundLocation: location, initialPath: location.pathname}}><Button type='primary'>Войти</Button></Link>
                : <Link to='/'><Button type='primary' onClick={logoutFn}>Выйти</Button></Link>
            }

        </div>
     );
}

export default UserBlock;

