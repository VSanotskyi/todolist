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

const SignUp: React.FC<IProps> = ({ onSubmit }) => {
    const SignUpFormik = useFormik({
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
                title={'Join us!'}
                onSubmit={SignUpFormik.handleSubmit}
                buttonTitle={'Create account'}
                footer={{
                    text: 'Already have an account?',
                    link: {
                        text: 'Sign in',
                        path: '/sign-in',
                    },
                }}
            >
                <CustomInput
                    type={'email'}
                    label={'Email'}
                    name={EInputName.EMAIL}
                    placeholder={'example@email.com'}
                    value={SignUpFormik.values.email}
                    onChange={SignUpFormik.handleChange}
                    onBlur={SignUpFormik.handleBlur}
                    hasError={
                        !!(
                            SignUpFormik.touched.email &&
                            SignUpFormik.errors.email
                        )
                    }
                    error={SignUpFormik.errors.email}
                />
                <CustomInput
                    type={'password'}
                    label={'Password'}
                    name={EInputName.PASSWORD}
                    value={SignUpFormik.values.password}
                    onChange={SignUpFormik.handleChange}
                    onBlur={SignUpFormik.handleBlur}
                    hasError={
                        !!(
                            SignUpFormik.touched.password &&
                            SignUpFormik.errors.password
                        )
                    }
                    error={SignUpFormik.errors.password}
                />
            </Form>
        </div>
    );
};

export default SignUp;
