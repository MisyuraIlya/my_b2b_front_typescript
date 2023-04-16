import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import ReactApp from './RouterApp';
import {MemoryRouter, Route} from "react-router-dom";
import '@testing-library/jest-dom'

describe('React Router', () => {
    test('should render Home page on default route', () => {
        const { store } = setupStore();
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <ReactApp />
                </MemoryRouter>
            </Provider>

        );
        const homePage = screen.getByTestId('home-page');
        expect(homePage).toBeInTheDocument();
    });
  
    test('should render Cart page on /cart route', () => {
        const { store } = setupStore();
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/cart']}>
                    <ReactApp />
                </MemoryRouter>
            </Provider>
        );
        const cartPage = screen.getByTestId('cart-page');
        expect(cartPage).toBeInTheDocument();
    });
  
    test('should render Post page on /post route', () => {
        const { store } = setupStore();
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/post']}>
                    <ReactApp />
                </MemoryRouter>
            </Provider>

        );
        const postPage = screen.getByTestId('post-page');
        expect(postPage).toBeInTheDocument();
    });
  
    test('should render Error page on invalid route', () => {
        const { store } = setupStore();
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/invalid']}>
                    <ReactApp />
                </MemoryRouter>
            </Provider>

        );
        const errorPage = screen.getByTestId('error-page');
        expect(errorPage).toBeInTheDocument();
    });
  
    test('should navigate to Home page on Home link click', () => {
        const { store } = setupStore();
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/cart']}>
                    <ReactApp />
                </MemoryRouter>
            </Provider>

        );
        const homeLink = screen.getByTestId('home-link');
        fireEvent.click(homeLink);
        const homePage = screen.getByTestId('home-page');
        expect(homePage).toBeInTheDocument();
    });
  
    test('should navigate to Cart page on Cart link click', () => {
        const { store } = setupStore();
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <ReactApp />
                </MemoryRouter>
            </Provider>

        );
        const cartLink = screen.getByTestId('cart-link');
        fireEvent.click(cartLink);
        const cartPage = screen.getByTestId('cart-page');
        expect(cartPage).toBeInTheDocument();
    });
  
    test('should navigate to Post page on Post link click', () => {
        const { store } = setupStore();
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <ReactApp />
                </MemoryRouter>
            </Provider>
        );
        const postLink = screen.getByTestId('post-link');
        fireEvent.click(postLink);
        const postPage = screen.getByTestId('post-page');
        expect(postPage).toBeInTheDocument();
    });
  });