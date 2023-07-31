import { useForm } from 'react-hook-form';
import Form from '../form';
import FormInput from '../form-input';
import FormButton from '../form-button';
import { errorMessage, formValidations } from 'utils/validations';
import ErrorComponent from 'components/error-component';
import { useAppSelector } from 'storage/hook-types';
import Spiner from 'components/spiner';
import { userStateSelector } from 'storage/selectors';
import { registerPath } from 'utils/constants';
import { TUserAuthBody } from 'types/api-types';
import React, { useCallback } from 'react';

type ILoginFormProps = {
    onSubmit: (dataform: TUserAuthBody) => void; 
    onNavigate: (to:string) => void;
}

const LoginForm = ({onSubmit, onNavigate}: ILoginFormProps) => {

    const { error, loading } = useAppSelector(userStateSelector);
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});
    const emailRegister = register('email', formValidations.email);
    const passwordRegister = register('password', formValidations.password);    
    const handleClickNavigate = useCallback(() => {onNavigate(registerPath)}, [])
        
    return (         
        <Form title={'Вход'} handleForm={handleSubmit(onSubmit)}>
            <FormInput 
                {...emailRegister}
                id='email'
                type='text'
                placeholder='email'
                autoComplete="none"               
            />
            {errorMessage('email', errors)}
            <FormInput 
                {...passwordRegister}
                id='password'
                type='password'
                placeholder='Пароль'
            />
            {errorMessage('password', errors)}
            {loading && <Spiner />}
            {error && <ErrorComponent title='Ошибка авторизации' subtitle={error as string}/>}
            <FormButton type='submit' color='primary'>Войти</FormButton>
            <FormButton onClick={handleClickNavigate} type='button' color='secondary' >Зарегистрироваться</FormButton>
        </Form>           
     );
}

export default React.memo(LoginForm);