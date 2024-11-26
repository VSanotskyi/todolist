/** @format */

import * as React from 'react';

interface IProps {
    type?: 'button' | 'submit' | 'reset';
    mode?: 'primary' | 'secondary' | 'neutral';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<IProps> = ({
    type = 'button',
    mode = 'neutral',
    className,
    onClick,
    children,
}) => {
    if (mode === 'neutral') {
        return (
            <button type={type} className={className} onClick={onClick}>
                {children}
            </button>
        );
    }

    if (mode === 'secondary') {
        return (
            <button
                type={type}
                className={`w-full px-4 py-2 border rounded-md border-accentBlue text-accentBlue hover:border-hover hover:bg-hover hover:text-accentWhite ${className}`}
                onClick={onClick}
            >
                {children}
            </button>
        );
    }

    return (
        <button
            onClick={onClick}
            type={type}
            className={`w-full px-4 py-2 border rounded-md border-accentBlue bg-accentBlue text-accentWhite hover:border-hover hover:bg-hover ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
