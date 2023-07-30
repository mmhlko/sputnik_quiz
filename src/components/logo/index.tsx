import { Link } from 'react-router-dom';
import s from './styles.module.scss'
import { Typography } from 'antd';
import { homePAth } from 'utils/constants';

const { Title } = Typography;

const Logo = () => {
    return ( 
        <Link to={homePAth} className={s.logo}><Title level={2} className={s.text}>QUIZ LOGO</Title></Link>        
     );
}

export default Logo;

