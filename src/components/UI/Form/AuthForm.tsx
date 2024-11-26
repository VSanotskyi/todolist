import React, { useState } from 'react';
import CustomInput from '@components/UI/Form/input/CustomInput.tsx';
import Button from '@components/UI/Button/Button.tsx';

interface IProps {
    onSubmit: () => void;
    title: string;
}

const AuthForm: React.FC<IProps> = ({ onSubmit, title }) => {
    const [setEmail, setSetEmail] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setSetEmail(value);
    };

    return (
        <div
            className={
                'flex flex-col w-full gap-2 max-w-96 border border-accentGray p-4 rounded shadow-lg'
            }
        >
            <h2 className={'text-xl border-b border-accentGray'}>{title}</h2>
            <form onSubmit={onSubmit} className={'flex flex-col flex-1 gap-2'}>
                <CustomInput
                    type={'email'}
                    label={'Email'}
                    placeholder={'example@email.com'}
                    value={setEmail}
                    onChange={handleChange}
                />
                <CustomInput
                    type={'email'}
                    label={'Email'}
                    placeholder={'example@email.com'}
                    value={setEmail}
                    onChange={handleChange}
                />
                <Button type={'submit'} mode={'primary'} className={'text-xl'}>
                    Create account
                </Button>
            </form>
        </div>
    );
};

export default AuthForm;
