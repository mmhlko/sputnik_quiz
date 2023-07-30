import { Button } from "antd";
import { Link } from "react-router-dom";
import s from './styles.module.scss';
import { homePAth } from "utils/constants";

type TErrorProps = {
    title: string,
    subtitle?: string,
    withButton?: boolean
}

const ErrorComponent = ({title, subtitle, withButton}:TErrorProps) => {
    
    return ( 
        <div className={s.wrapper}>
            {title && <p className="error-message">{title}</p>}
            {subtitle && <p className="error-message">{subtitle}</p>}
            {withButton && <Link to={homePAth}><Button type="primary">На главную</Button></Link>}
        </div>
     );
}

export default ErrorComponent;