import classNames from 'classnames';
import s from './styles.module.scss'
import { forwardRef } from 'react';

const FormInput = forwardRef<HTMLInputElement, any>(({ typeTag, ...props }, ref) => {

    switch (typeTag) {
        case 'textarea':
            return <textarea ref={ref} className={classNames(s.input, s.textarea)} {...props} />
        default:
            return <input ref={ref} className={s.input} {...props} />;
    }
})

export default FormInput;

