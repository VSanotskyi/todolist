import { Outlet, useNavigate } from 'react-router';

import Header from '@components/UI/Header/Header.tsx';
import { useAuth } from '../../hooks/useAuth.ts';
import { useEffect } from 'react';
import { routesList } from '@utils/constants/routesList.ts';
import { useScreenSize } from '../../hooks/useScreenSize.ts';
import Nav from '@components/UI/Nav';
import Dropdown from '@components/UI/Dropdown';

const MOCK_DATA = [
    {
        title: 'Sign-in',
        href: '/sign-in',
    },
    {
        title: 'Sign-up',
        href: '/sign-up',
    },
];

const MainLayout = () => {
    const navigate = useNavigate();
    const screenSize = useScreenSize();
    const { isSession } = useAuth();

    const handleNavigate = (link: string) => {
        navigate(link);
    };

    useEffect(() => {
        if (isSession) {
            navigate(routesList.HOME);
        }
    }, [isSession, navigate]);

    return (
        <>
            <Header>
                {screenSize === 'mobile' ? (
                    <Dropdown onNavigate={handleNavigate} links={MOCK_DATA} />
                ) : (
                    <Nav onNavigate={handleNavigate} links={MOCK_DATA} />
                )}
            </Header>
            <Outlet />
        </>
    );
};

export default MainLayout;
