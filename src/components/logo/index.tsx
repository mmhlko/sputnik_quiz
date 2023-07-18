import { Link } from 'react-router-dom';
import s from './styles.module.scss'
import { Typography } from 'antd';

const { Title } = Typography;



function Logo() {
    return ( 
        <Link to='/' className={s.logo}><Title level={2} className={s.text}>QUIZ LOGO</Title></Link>
        
     );
}

export default Logo;

