import { render, screen, fireEvent } from '@testing-library/react';
import ProductItem from './ProductItem';
// import axios from 'axios';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter, Route, Routes} from "react-router-dom";
// import UserDetailsPage from "../../pages/UserDetailsPage";
import React from "react";
// import AppRouter from "../../router/AppRouter";
// import {renderWithRouter} from "../../tests/helpers/renderWithRouter";

jest.mock('axios');

describe('USERS TEST', () => {
    let response: any;
        beforeEach(() => {
        response = {
            data: [
                {
                    id: 1,
                    name: "Leanne Graham"
                },
                {
                    id: 2,
                    name: "Ervin Howell"
                },
                {
                    id: 3,
                    name: "Clementine Bauch"
                }
            ]
        }
    })
    test('creation form', async () => {
        // (axios.get as jest.MockedFunction<typeof axios.get>).mockReturnValue(response);
        // render(<Users />);
        // screen.debug()
        // const users = await screen.findAllByTestId('user-item');
        // screen.debug()
        // expect(users.length).toBe(3);
        // expect(axios.get).toBeCalledTimes(1);
        // screen.debug();
    });
})
