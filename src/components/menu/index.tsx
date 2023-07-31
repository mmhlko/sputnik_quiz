import { Link } from 'react-router-dom';
import s from './styles.module.scss';
import { homePath } from 'utils/constants';

const Menu = () => {
    
    return (
        <nav>
            <ul className={s.nav__list}>
                <li><Link to={homePath} className={s.nav__link}>Главная</Link></li>
                <li><Link to={'#'} className={s.nav__link}>Контакты</Link></li>
                <li><Link to={'#'} className={s.nav__link}>О проекте</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;

