import React from 'react';
import { useFormik } from 'formik';

import Form from '@components/UI/Form/Form.tsx';
import CustomInput from '@components/UI/Form/input/CustomInput.tsx';

import { AuthSchema } from '@utils/schemas/authSchema.ts';
import { IAuthReq } from '@utils/types/authInterfaces.ts';

enum EInputName {
    EMAIL = 'email',
    PASSWORD = 'password',
}

interface IProps {
    onSubmit: (dto: IAuthReq) => Promise<void>;
}

const SignIn: React.FC<IProps> = ({ onSubmit }) => {
    const signInFormik = useFormik({
        initialValues: {
            [EInputName.EMAIL]: '',
            [EInputName.PASSWORD]: '',
        },
        validationSchema: AuthSchema,
        onSubmit: async (values) => {
            await onSubmit(values);
        },
    });

    return (
        <div className={'flex justify-center items-center w-full h-full p-8'}>
            <Form
                title={'Welcome back!'}
                onSubmit={signInFormik.handleSubmit}
                buttonTitle={'Sign In'}
                footer={{
                    text: 'Don’t have an account?',
                    link: {
                        text: 'Sign up now!',
                        path: '/sign-up',
                    },
                }}
            >
                <CustomInput
                    type={'email'}
                    label={'Email'}
                    name={EInputName.EMAIL}
                    placeholder={'example@email.com'}
                    value={signInFormik.values.email}
                    onChange={signInFormik.handleChange}
                    onBlur={signInFormik.handleBlur}
                    hasError={
                        !!(
                            signInFormik.touched.email &&
                            signInFormik.errors.email
                        )
                    }
                    error={signInFormik.errors.email}
                />
                <CustomInput
                    type={'password'}
                    label={'Password'}
                    name={EInputName.PASSWORD}
                    value={signInFormik.values.password}
                    onChange={signInFormik.handleChange}
                    onBlur={signInFormik.handleBlur}
                    hasError={
                        !!(
                            signInFormik.touched.password &&
                            signInFormik.errors.password
                        )
                    }
                    error={signInFormik.errors.password}
                />
            </Form>
        </div>
    );
};

export default SignIn;
