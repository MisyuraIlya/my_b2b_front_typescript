/* eslint-disable react/react-in-jsx-scope */
import {render, screen} from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import { createReduxStore } from "../../store/reducers/store";
import "@testing-library/jest-dom";
import { renderWithRedux } from "../../../helpers/renderWithRedux";
// import {renderTestApp} from "../../tests/helpers/renderTestApp";

describe('Counter test', () => {
    test('Test router', async () => {
        // const {getByTestId} = render(renderTestApp(null, {
        //     route: '/',
        //     initialState: {
        //         counter: {value: 10}
        //     }
        // }))
        // eslint-disable-next-line react/react-in-jsx-scope
        const {getByTestId} = render(
            renderWithRedux(<Counter/>, {
                counter: {
                    value: 10
                }
            })
        )

        const incrementBtn = getByTestId('increment-btn')
        expect(getByTestId('value-title')).toHaveTextContent('10')

        await userEvent.click(incrementBtn);

        expect(getByTestId('value-title')).toHaveTextContent('11')
    });
})