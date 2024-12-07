import { Outlet, useNavigate } from 'react-router';

import Header from '@components/UI/Header/Header.tsx';
import Button from '@components/UI/Button/Button.tsx';

const MOCK_DATA = [
    {
        id: 1,
        title: 'Sign-in',
        link: '/sign-in',
    },
    {
        id: 2,
        title: 'Sign-up',
        link: '/sign-up',
    },
];

const MainLayout = () => {
    const navigate = useNavigate();
    const handleNavigate = (link: string) => {
        navigate(link);
    };

    return (
        <>
            <Header>
                <nav>
                    <ul className={'flex gap-2'}>
                        {MOCK_DATA.map((item) => (
                            <li key={item.id}>
                                <Button
                                    type={'button'}
                                    mode={
                                        item.id === 1 ? 'secondary' : 'primary'
                                    }
                                    onClick={() => handleNavigate(item.link)}
                                >
                                    {item.title}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Header>
            <Outlet />
        </>
    );
};

export default MainLayout;
