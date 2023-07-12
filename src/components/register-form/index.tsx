
import { useForm } from 'react-hook-form';
import s from './styles.module.scss'
import Form from '../form';
import FormInput from '../form-input';
import FormButton from '../form-button';
import { TUser, TUserRegisterBody } from 'utils/api';
/* import { UserRegisterBodyDto } from '../../utils/api'; */



interface IRegisterFormProps {
    onSubmit: (dataform: TUserRegisterBody) => void;
    onNavigate: (value: string) => void;
}

function RegisterForm({ onSubmit, onNavigate }: IRegisterFormProps) {

    const { register, handleSubmit, formState: { errors } } = useForm<any>({ mode: 'onBlur' });

    /*     const navigate = useNavigate();
        const location = useLocation();
        const initialPath = location.state?.initialPath; */

    //Переход на страницу  авторизации

    const nameRegister = register('name', {
        required: {
            value: false,
            message: "Обязательное поле"
        },
        pattern: {
            value: /^[A-Za-z]{3,}/,
            message: "Имя должно быть не менее 3 букв"
        }
    })

    const emailRegister = register('email', {
        required: {
            value: true,
            message: "Обязательное поле"
        },
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Email не соотвествует формату электронной почты"
        }
    })

    const passwordRegister = register('password', {
        required: {
            value: true,
            message: "Обязательное поле"
        },
        pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: "Пароль должен содержать минимум восемь символов, одну букву латинского алфавита и одну цифру"
        }
    })

    return (
            <Form title={'Регистрация'} handleForm={handleSubmit(onSubmit)}>
                <FormInput
                    {...nameRegister}
                    id='username'
                    type='text'
                    placeholder='Имя'
                />
                {errors?.email && <p className='error-message'>{errors.email.message}</p>}
                <FormInput
                    {...emailRegister}
                    id='email'
                    type='email'
                    placeholder='email'
                />
                {errors?.email && <p className='error-message'>{errors.email.message}</p>}

                <FormInput
                    {...passwordRegister}
                    id='password'
                    type='password'
                    placeholder='Пароль'
                />
                {errors?.password && <p className='error-message'>{errors.password.message}</p>}
                <p className='info-text'>Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и соглашаетесь на информационную рассылку.</p>
                <FormButton type='submit' color='primary' extraClass={s.formButton}>Зарегистрироваться</FormButton>
                <FormButton onClick={() => onNavigate('/login')} type='button' color='secondary' extraClass={s.formButton}>Войти</FormButton>
            </Form>            

    );
}

export default RegisterForm;