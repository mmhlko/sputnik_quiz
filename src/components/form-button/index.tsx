import s from './styles.module.scss';
import classNames from 'classnames';
import { FormButtonSize, IFormButtonProps } from './formButtonMeta';


const FormButton = ({children, color, size=FormButtonSize.full ,extraClass, ...props}: IFormButtonProps) => {
    return ( 
        <button 
        {...props} 
        className={classNames(s.btn, s[color], {[extraClass as string]: !!extraClass, [s[size]]: !!size})}>
            {children}
        </button>
     );
}

export default FormButton;

