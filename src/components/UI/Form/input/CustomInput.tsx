import React from 'react';

interface IProps {
    label: string;
    value: string;
    placeholder?: string;
    type: 'text' | 'number' | 'email' | 'password';
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<IProps> = ({
    type,
    label,
    value,
    placeholder,
    onChange,
}) => {
    return (
        <div>
            <label className={'flex flex-col flex-1 gap-1'}>
                <p>{label}</p>

                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={
                        'outline-none p-2 rounded border border-accentGray hover:border-accentBlue focus:border-accentBlue'
                    }
                />
            </label>
        </div>
    );
};

export default CustomInput;
