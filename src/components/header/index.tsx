import Logo from 'components/logo';
import s from './styles.module.scss'
import UserBlock from 'components/user-block';
import cn from 'classnames';

const Header = () => {   
    
    return (

        <header className={s.wrapper}>
            <div className={cn('container', s.header)}>
                <Logo />
                <UserBlock />
            </div>
        </header>
    );
}

export default Header;

