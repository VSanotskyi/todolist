import React from 'react';

import Logo from '@components/UI/Logo/Logo.tsx';

interface IProps {
    children: React.ReactNode;
}

const Header: React.FC<IProps> = ({ children }) => {
    return (
        <div
            className={
                'flex items-center justify-between p-4 border-b border-acc-gray mb-8'
            }
        >
            <Logo />
            {children}
        </div>
    );
};

export default Header;
