import React from 'react';

import Button from '@components/UI/Button/Button.tsx';

interface link {
    title: string;
    href: string;
}

interface IProps {
    links: link[];
    onNavigate: (href: string) => void;
}

const Nav: React.FC<IProps> = ({ links, onNavigate }) => {
    return (
        <nav>
            <ul className={'flex gap-2'}>
                {links.map((link, index) => (
                    <li key={index}>
                        <Button
                            type={'button'}
                            mode={index === 1 ? 'secondary' : 'primary'}
                            onClick={() => onNavigate(link.href)}
                        >
                            {link.title}
                        </Button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
