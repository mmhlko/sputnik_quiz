import { useForm } from 'react-hook-form';
import Form from '../form';
import FormInput from '../form-input';
import FormButton from '../form-button';
import { errorMessage, formValidations } from 'utils/validations';
import { TUserRegisterBody } from 'types/api-types';
import ErrorComponent from 'components/error-component';
import { useAppSelector } from 'storage/hook-types';
import Spiner from 'components/spiner';
import { USER_AUTHENTICATION } from 'utils/constants';
import { Typography } from 'antd';
const { Text, Title } = Typography;

interface IRegisterFormProps {
    onSubmit: (dataform: TUserRegisterBody) => void;
    onNavigate: (value: string) => void;
}

const RegisterForm = ({ onSubmit, onNavigate }: IRegisterFormProps) => {

    const { register, handleSubmit, formState: { errors } } = useForm<any>({ mode: 'onBlur' });
    const nameRegister = register('name', formValidations.name);
    const emailRegister = register('email', formValidations.email);
    const passwordRegister = register('password', formValidations.password);
    const { error, loading, authorization } = useAppSelector(state => state.user);

    return (
        <Form title={'Регистрация'} handleForm={handleSubmit(onSubmit)}>
            {authorization === USER_AUTHENTICATION
                ? <>
                    <Title level={3} type="success">Вы успешно зарегистрированы!</Title>
                    <Text>Для входа в систему, необходимо подтвердить свой email</Text>
                </>
                : <>
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
                    {loading && <Spiner />}
                    {error && <ErrorComponent title='Ошибка авторизации' subtitle={error as string} />}
                    <p className='info-text'>Для регистрации нужно указать реальный email! Действует ограничение 4 регистрации за 1 час</p>
                    <FormButton type='submit' color='primary'>Зарегистрироваться</FormButton>
                </>
            }
            <FormButton onClick={() => onNavigate('/login')} type='button' color='secondary'>Войти</FormButton>
        </Form>
    );
}

export default RegisterForm;