import React, { ReactNode, SyntheticEvent } from 'react';
import s from './styles.module.scss'
import classNames from 'classnames';

interface IFormProps {
    handleForm: (e: SyntheticEvent<HTMLFormElement>) => void, 
    children?: ReactNode, 
    title?: string
    align?: 'left' | 'center' | 'right'
}


const Form = ({handleForm, children, title, align='center'}: IFormProps) => {
   
    return ( 
        <div className={s.container}>
            <form onSubmit={handleForm} className={classNames(s.form, {[s[align]]: !!align}) }>
                {title && <h3 className={s.title}>{title}</h3>}
                {children}
            </form>
        </div>
     );
}

export default React.memo(Form);