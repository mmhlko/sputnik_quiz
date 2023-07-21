import { Button } from "antd";
import { Link } from "react-router-dom";
import s from './styles.module.scss';

type TErrorProps = {
    title: string,
    subtitle?: string
}

const ErrorComponent = ({title, subtitle}:TErrorProps) => {
    
    return ( 
        <div className={s.wrapper}>
            <h2>Что-то пошло не так...</h2>
            {title && <p>{title}</p>}
            {subtitle && <p>{subtitle}</p>}
            <Link to={'/'}><Button type="primary">На главную</Button></Link>
        </div>
     );
}

export default ErrorComponent;