import React, { useState } from 'react';
import Button from '@components/UI/Button/Button.tsx';
import IconMenu from '@components/UI/Icons/IconMenu.tsx';
import IconClose from '@components/UI/Icons/IconClose.tsx';

interface ILinks {
    title: string;
    href: string;
}

interface IProps {
    links: ILinks[];
    onNavigate: (href: string) => void;
}

const Dropdown: React.FC<IProps> = ({ links, onNavigate }) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);

    const toggleDropdown = () => {
        setIsOpenDropdown((prev) => !prev);
    };

    return (
        <div className={'relative'}>
            <Button
                type={'button'}
                mode={'neutral'}
                onClick={toggleDropdown}
                className={'p-2'}
            >
                {isOpenDropdown ? <IconClose /> : <IconMenu />}
            </Button>
            {isOpenDropdown && (
                <ul
                    className={
                        'absolute top-[100%] flex flex-col gap-2 p-2 right-0 bg-acc-gray'
                    }
                >
                    {links.map((link) => (
                        <li key={link.href}>
                            <Button
                                type={'button'}
                                mode={'neutral'}
                                onClick={() => {
                                    onNavigate(link.href);
                                    toggleDropdown();
                                }}
                                className={
                                    'w-full text-left py-2 px-4 min-w-[94px] text-black hover:bg-cl-hover hover:text-white'
                                }
                            >
                                {link.title}
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
