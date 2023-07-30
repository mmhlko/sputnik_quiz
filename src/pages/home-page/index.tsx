import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "storage/hook-types";
import s from './styles.module.scss'
import { userDataSelector } from "storage/selectors";
import { loginPAth, quizPAth } from "utils/constants";

function HomePage() {

    const user = useAppSelector(userDataSelector);
    const location = useLocation();
    
    const redirectTo = {
        hash: "",
        key: "defailt",
        pathname: quizPAth,
        state: {},
    }  

    return ( 
        <div className={s.wrapper}>
            <h2>Здесь можно пройти квиз</h2>
            {!user
                ? <Link replace to={loginPAth} state={{backgroundLocation: location, initialPath: location.pathname, from: redirectTo}}>
                    <Button type='primary'>Авторизироваться</Button>
                </Link>
                : <Link to={quizPAth}><Button type='primary'>Играть</Button></Link>}
             
        </div>
     );
}

export default HomePage;