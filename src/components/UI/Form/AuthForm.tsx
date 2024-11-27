import React from 'react';
import { useFormik } from 'formik';

import CustomInput from '@components/UI/Form/input/CustomInput.tsx';
import Button from '@components/UI/Button/Button.tsx';

import { AuthSchema } from '@utils/schemas/authSchema.ts';

enum EInputName {
    EMAIL = 'email',
    PASSWORD = 'password',
}

interface IProps {
    title: string;
    type: 'sign-in' | 'sign-up';
}

const AuthForm: React.FC<IProps> = ({ title, type }) => {
    const authFormik = useFormik({
        initialValues: {
            [EInputName.EMAIL]: '',
            [EInputName.PASSWORD]: '',
        },
        validationSchema: AuthSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div
            className={
                'flex flex-col w-full gap-2 max-w-96 border border-accentGray p-4 rounded shadow-lg'
            }
        >
            <h2 className={'text-xl border-b border-accentGray'}>{title}</h2>
            <form
                onSubmit={authFormik.handleSubmit}
                className={'flex flex-col flex-1 gap-2'}
            >
                <CustomInput
                    type={'email'}
                    label={'Email'}
                    name={EInputName.EMAIL}
                    placeholder={'example@email.com'}
                    value={authFormik.values.email}
                    onChange={authFormik.handleChange}
                    onBlur={authFormik.handleBlur}
                    hasError={
                        !!(authFormik.touched.email && authFormik.errors.email)
                    }
                    error={authFormik.errors.email}
                />
                <CustomInput
                    type={'password'}
                    label={'Password'}
                    name={EInputName.PASSWORD}
                    value={authFormik.values.password}
                    onChange={authFormik.handleChange}
                    onBlur={authFormik.handleBlur}
                    hasError={
                        !!(
                            authFormik.touched.password &&
                            authFormik.errors.password
                        )
                    }
                    error={authFormik.errors.password}
                />
                <Button type={'submit'} mode={'primary'} className={'text-xl'}>
                    Create account
                </Button>
            </form>
            <div className={'flex gap-1 flex-1 p-2'}>
                {type === 'sign-in' ? (
                    <>
                        <p>Don’t have an account?</p>
                        <Button
                            type={'button'}
                            mode={'neutral'}
                            className={
                                'text-sm text-accentBlue underline hover:text-hover'
                            }
                        >
                            Sign up now!
                        </Button>
                    </>
                ) : (
                    <>
                        <p>Already have an account?</p>
                        <Button
                            type={'button'}
                            mode={'neutral'}
                            className={
                                'text-sm text-accentBlue underline hover:text-hover'
                            }
                        >
                            Log in to continue.
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default AuthForm;
