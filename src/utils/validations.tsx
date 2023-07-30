import { FieldErrors } from "react-hook-form"

export const formValidations = {
    name: {
        required: {
            value: false,
            message: "Обязательное поле"
        },
        pattern: {
            value: /^[а-яА-ЯёЁa-zA-Z][а-яА-ЯёЁa-zA-Z0-9-_\.]{1,20}$/,
            message: "Имя должно быть не менее 2 букв и начинаться с буквы"
        }
    },
    email: {
        required: {
            value: true,
            message: "Обязательное поле"
        },
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Email не соотвествует формату электронной почты"
        }
    },
    password: {
        required: {
            value: true,
            message: "Обязательное поле"
        },
        pattern: {
            value: /^.{8,}$/,
            message: "Пароль должен содержать минимум восемь символов"
        }
    }

}

export const errorMessage = (key:string, errors: FieldErrors<any>) => {

    if (errors[key]) {
        return <p className='error-message'>{errors[key].message as string}</p>
    }
    
}

