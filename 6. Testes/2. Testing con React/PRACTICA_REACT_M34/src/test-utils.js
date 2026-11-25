import searchReducer from "./redux/slices/searchSlice";
import libraryReducer from "./redux/slices/librarySlice";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const makeStore = (preloadedState) => configureStore({
    reducer: {
        search: searchReducer, 
        library: libraryReducer
    },
    preloadedState
});

const renderWithProviders = (ui, preloadedState, route = '/') => {
    const store = makeStore(preloadedState);
    const Wrapper = ({ children }) => (
        <MemoryRouter initialEntries={[route]}>
            <Provider store={store}>
                <ThemeProvider theme={Theme}>
                    {children}
                </ThemeProvider>
            </Provider>
        </MemoryRouter>
    );
    return { store, ...render(ui, { wrapper: Wrapper }) };
}

export { makeStore, renderWithProviders };