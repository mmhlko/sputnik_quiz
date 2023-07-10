import { Button } from 'antd';
import s from './styles.module.scss'


function UserBlock() {
    return ( 
        <div className={s.userBlock}>
            <Button type='primary' href='/login'>Войти</Button>
        </div>
     );
}

export default UserBlock;

