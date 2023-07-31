import { Button } from "antd";
import { Link } from "react-router-dom";
import s from './styles.module.scss';
import { homePath } from "utils/constants";
import React from "react";

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
            {withButton && <Link to={homePath}><Button type="primary">На главную</Button></Link>}
        </div>
     );
}

export default React.memo(ErrorComponent);