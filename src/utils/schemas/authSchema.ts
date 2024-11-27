import * as Yup from 'yup';

const AuthSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email format') // Правильний формат електронної пошти
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters') // Мінімум 8 символів
        .required('Password is required') // Пароль обов’язковий
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(
            /[@$!%*?&]/,
            'Password must contain at least one special character'
        ),
});

export { AuthSchema };
