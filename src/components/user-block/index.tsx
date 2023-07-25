import { Button } from 'antd';
import s from './styles.module.scss'
import { useAppDispatch, useAppSelector } from 'storage/hook-types';
import { UserOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchUserLogout } from 'storage/asyncActions/user-slice';
import { useMediaQueries } from 'hooks/useMediaQuery';


const UserBlock = () => {

    const user = useAppSelector(state => state.user.data);
    const dispatch = useAppDispatch();
    const location = useLocation();
    const { sm } = useMediaQueries();

    const logoutFn = () => {
        dispatch(fetchUserLogout());        
    }

    return (
        <div className={s.userBlock}>
            {user?.email && <span><UserOutlined className={s.userIcon} />{sm && user.email}</span>}

            {!user
                ? <Link replace to={'/login'} state={{ backgroundLocation: location, initialPath: location.pathname }}><Button type='primary'>Войти</Button></Link>
                : <Link to='/'><Button type='primary' onClick={logoutFn}>Выйти</Button></Link>
            }

        </div>
    );
}

export default UserBlock;

