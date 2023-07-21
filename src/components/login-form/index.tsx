
import { useForm } from 'react-hook-form';
import Form from '../form';
import FormInput from '../form-input';
import FormButton from '../form-button';
import { errorMessage, formValidations } from 'utils/validations';

interface ILoginFormProps {
    onSubmit: (dataform: any) => void; 
    onNavigate: (to:string) => void;
    //onNavigateReset: (to:string) => void;
}

const LoginForm = ({onSubmit, onNavigate}: ILoginFormProps) => {

    const {register, handleSubmit, formState: {errors}} = useForm<any>({mode: 'onBlur'});
    const emailRegister = register('email', formValidations.email);
    const passwordRegister = register('password', formValidations.password);
        
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
                       
            <FormButton type='submit' color='primary' >Войти</FormButton>
            <FormButton onClick={() => onNavigate('/register')} type='button' color='secondary' >Зарегистрироваться</FormButton>
        </Form>   
        
     );
}

export default LoginForm;