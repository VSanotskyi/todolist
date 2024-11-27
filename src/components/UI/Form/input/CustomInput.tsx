import React, { useState } from 'react';
import Button from '@components/UI/Button/Button.tsx';
import IconHide from '@components/UI/Icons/IconHide.tsx';
import IconShow from '@components/UI/Icons/IconShow.tsx';

interface IProps {
    label: string;
    value: string;
    name: string;
    placeholder?: string;
    type: 'text' | 'number' | 'email' | 'password';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    hasError: boolean;
    error?: string;
}

const CustomInput: React.FC<IProps> = ({
    type,
    label,
    name,
    value,
    placeholder,
    onChange,
    onBlur,
    error,
    hasError,
}) => {
    const [showPassword, setShowPassword] = useState<'password' | 'text'>(
        'password'
    );

    const toggleShowPassword = () => {
        setShowPassword((prev) => (prev === 'password' ? 'text' : 'password'));
    };

    return (
        <div>
            <label className={'flex flex-col flex-1 gap-1'}>
                <p className={`${hasError && 'text-accentRed'}`}>{label}</p>
                <div className={'flex relative'}>
                    <input
                        type={type === 'password' ? showPassword : type}
                        value={value}
                        name={name}
                        placeholder={placeholder}
                        onChange={onChange}
                        onBlur={onBlur}
                        className={` flex-1 outline-none p-2 rounded border border-accentGray hover:border-accentBlue focus:border-accentBlue ${hasError ? 'border-accentRed' : ''}`}
                    />
                    {type === 'password' && (
                        <Button
                            type={'button'}
                            mode={'neutral'}
                            onClick={toggleShowPassword}
                            className={
                                'absolute right-1 top-[50%] transform -translate-y-1/2 p-2'
                            }
                        >
                            {showPassword === 'password' ? (
                                <IconHide />
                            ) : (
                                <IconShow />
                            )}
                        </Button>
                    )}
                </div>
                {error && <p className={'text-sm text-accentRed'}>{error}</p>}
            </label>
        </div>
    );
};

export default CustomInput;
