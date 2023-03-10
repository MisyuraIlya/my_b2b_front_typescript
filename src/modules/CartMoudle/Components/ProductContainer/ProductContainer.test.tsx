import { render, screen, fireEvent, waitFor, getByText } from '@testing-library/react';

import axios, {AxiosResponse} from 'axios';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import {MemoryRouter, Route, Routes} from "react-router-dom";
// import UserDetailsPage from "../../pages/UserDetailsPage";
import React from "react";
// import AppRouter from "../../router/AppRouter";
// import {renderWithRouter} from "../../tests/helpers/renderWithRouter";
import ProductContainer from './ProductContainer';
import { Provider } from 'react-redux';
import { setupStore } from '../../../../store/store';
jest.mock("axios");

describe("ExampleComponent", () => {
  
  const store = setupStore();

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should fetch and display data on button click", async () => {
    try {
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
        data: [],
      });
      const { getByText } = render(
      <Provider store={store}>
        <ProductContainer/>
      </Provider>
      );
      const loadingMessage = await waitFor(() => getByText('Идет загрузка...'));
      expect(loadingMessage).toBeInTheDocument();
    } catch(e) {
      throw new Error('The data from api not sended')
    }
  });

  // test('renders error message when data fetch fails', async () => {
  //   const errorMessage = 'Something went wrong';
  //   (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(
  //     new Error(errorMessage)
  //   );
  //   const { getByText } = render(
  //     <Provider store={store}>
  //       <ProductContainer/>
  //     </Provider>
  //     );

  //   const errorMessageNode = await waitFor(() => getByText(errorMessage));
  //   expect(errorMessageNode).toBeInTheDocument();
  // });

  // it("should handle error on fetch failure", async () => {
  //   const errorMessage = "example error message";
  //   (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(
  //     new Error(errorMessage)
  //   );

  //   render(<ProductContainer />);

  //   const button = screen.getByRole("button", { name: /fetch data/i });
  //   fireEvent.click(button);

  //   await waitFor(() => {
  //     expect(screen.getByText(errorMessage)).toBeInTheDocument();
  //   });
  // });
  //TODO
});