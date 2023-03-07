/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/react-in-jsx-scope */
import { createReduxStore } from "../redux/store/reducers/store";
import {Provider} from "react-redux";

export const renderWithRedux = (component: any, initialState: {} | undefined) => {
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {component}
        </Provider>
    )
}