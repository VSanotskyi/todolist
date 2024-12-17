import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import MainPage from '@pages/MainPage.tsx';

test('renders main page content', () => {
    render(
        <MemoryRouter>
            <MainPage />
        </MemoryRouter>
    );

    expect(screen.getByText(/Stay organized, focused, and productive/i));
});
