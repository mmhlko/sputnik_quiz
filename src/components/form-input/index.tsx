import classNames from 'classnames'; 
import s from './styles.module.scss'
import { forwardRef } from 'react';



const FormInput = forwardRef<HTMLInputElement, any>(({typeTag, ...props}, ref) => {
    return ( 
        typeTag === 'textarea'
            ? <textarea ref={ref} className={classNames(s.input, s.textarea)} {...props}/>
            : <input ref={ref} className={s.input} {...props}/>

     );
})

export default FormInput;