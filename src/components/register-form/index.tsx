import { useForm } from 'react-hook-form';
import Form from '../form';
import FormInput from '../form-input';
import FormButton from '../form-button';
import { errorMessage, formValidations } from 'utils/validations';
import { TUserRegisterBody } from 'types/api';

interface IRegisterFormProps {
    onSubmit: (dataform: TUserRegisterBody) => void;
    onNavigate: (value: string) => void;
}

const RegisterForm = ({ onSubmit, onNavigate }: IRegisterFormProps) => {

    const { register, handleSubmit, formState: { errors } } = useForm<any>({ mode: 'onBlur' });

    const nameRegister = register('name', formValidations.name);
    const emailRegister = register('email', formValidations.email);
    const passwordRegister = register('password', formValidations.password)

    return (
        <Form title={'Регистрация'} handleForm={handleSubmit(onSubmit)}>
            <FormInput
                {...nameRegister}
                id='username'
                type='text'
                placeholder='Имя'
            />
            {errorMessage('name', errors)}
            <FormInput
                {...emailRegister}
                id='email'
                type='email'
                placeholder='email'
            />
            {errorMessage('email', errors)}

            <FormInput
                {...passwordRegister}
                id='password'
                type='password'
                placeholder='Пароль'
            />
            {errorMessage('password', errors)}
            <p className='info-text'>Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и соглашаетесь на информационную рассылку.</p>
            <FormButton type='submit' color='primary'>Зарегистрироваться</FormButton>
            <FormButton onClick={() => onNavigate('/login')} type='button' color='secondary'>Войти</FormButton>
        </Form>
    );
}

export default RegisterForm;