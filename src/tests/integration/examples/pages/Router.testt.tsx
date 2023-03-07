/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Router from './Router';
import {MemoryRouter} from "react-router-dom";
import '@testing-library/jest-dom'

describe('TEST APP', () => {
    test('Router test', async () => {
        render(
            <MemoryRouter>
                <Router/>
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        await userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        await userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('Error page test', () => {
        render(
            <MemoryRouter initialEntries={['/asfasfafasf']}>
                <Router/>
            </MemoryRouter>
        );
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
})
