import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "storage/hook-types";
import s from './styles.module.scss'

function HomePage() {

    const user = useAppSelector(state => state.user.data);
    const location = useLocation();
    
    const redirectTo = {
        hash: "",
        key: "defailt",
        pathname: "/quiz",
        state: {},
    }  

    return ( 
        <div className={s.wrapper}>
            <h2>Здесь можно пройти квиз</h2>
            {!user
                ? <Link replace to={'/login'} state={{backgroundLocation: location, initialPath: location.pathname, from: redirectTo}}>
                    <Button type='primary'>Авторизироваться</Button>
                </Link>
                : <Link to='/quiz'><Button type='primary'>Играть</Button></Link>}
             
        </div>
     );
}

export default HomePage;