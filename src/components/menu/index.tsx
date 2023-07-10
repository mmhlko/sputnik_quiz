import s from './styles.module.scss'


function Menu() {
    return (
        <nav className={s.menu}>
            <ul className={s.nav__list}>
                <li ><a className={s.nav__link} href="#">Сслыка 1</a></li>
                <li ><a className={s.nav__link} href="#">Сслыка 2</a></li>
                <li ><a className={s.nav__link} href="#">Сслыка 3</a></li>
            </ul>
        </nav>
    );
}

export default Menu;

