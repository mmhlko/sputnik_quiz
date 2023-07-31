import s from './styles.module.scss'
import React, { forwardRef } from 'react';

type Props = {
    id: string,
    type: string
    placeholder?: string
    autoComplete?: string
};

const FormInput = forwardRef<HTMLInputElement, Props>(({...props }, ref) => {

    return <input ref={ref} className={s.input} {...props} />;
    
})

export default React.memo(FormInput);

