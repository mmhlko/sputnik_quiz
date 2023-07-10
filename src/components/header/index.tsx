import Logo from 'components/logo';
import s from './styles.module.scss'
import Menu from 'components/menu';
import UserBlock from 'components/user-block';
import cn from 'classnames';



const items = ['ссылка1', 'ссылка2', 'ссылка3', 'ссылка4']



function Header() {


    return (

        <header className={s.wrapper}>
            <div className={cn('container', s.header)}>
                <Logo />
                <Menu />
                <UserBlock />
            </div>

        </header>

    );
}

export default Header;

