import React from 'react';
import SearchBar from "../SearchBar";
import Theme from "../../theme";
import axios from 'axios';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from "../../redux/slices/searchSlice";
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import { ThemeProvider } from "styled-components";

jest.mock('axios', () => ({ get: jest.fn() }));

const makeStore = () => configureStore({
    reducer: {
        search: searchReducer
    }
});

const renderSearchBar = () => {
    const store = makeStore();
    render(
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <SearchBar />
            </ThemeProvider>
        </Provider>
    );
    return store;
}

const mockData = {
    "album":[
        {
            "idAlbum":"2115886",
            "strAlbum":"Thursday",
            "strArtist":"The Weeknd",
            "intYearReleased":"2011"
        }]
}; 

describe('SearchBar Component', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    });
    it('should render the search bar correctly', () => {
        renderSearchBar();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Buscar' })).toBeInTheDocument();
    });
    it('should update the input value when the user types', () => {
        renderSearchBar();
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'The Weeknd' } });
        expect(input).toHaveValue('The Weeknd');
    });
    it('should dispatch the search action and update the store when the user clicks the search button', async () => {
        axios.get.mockResolvedValueOnce({ data: mockData });
        const store = renderSearchBar();
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button', { name: 'Buscar' });
        fireEvent.change(input, { target: { value: 'The Weeknd' } });
        fireEvent.click(button);
        expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('The%20Weeknd'));
        expect(store.getState().search.term).toBe('The Weeknd');
        await waitFor(() => {
            expect(store.getState().search.results).toHaveLength(1);
        });
    });
    it('should handle API errors gracefully', async () => {
        axios.get.mockRejectedValueOnce(new Error('API Error'));
        const store = renderSearchBar();
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button', { name: 'Buscar' });
        fireEvent.change(input, { target: { value: 'The Weeknd' } });
        fireEvent.click(button);
        expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('The%20Weeknd'));
        expect(store.getState().search.loading).toBe(true);
        await waitFor(() => {
            expect(store.getState().search.error).toBe('Ha ocurrido un error al tratar de extraer la informacion');
            expect(store.getState().search.loading).toBe(false);
        });
    });
    it('should not search and should reset the results when the query is empty', () => {
        const store = renderSearchBar();
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: '   ' } });
        fireEvent.click(screen.getByRole('button', { name: 'Buscar' }));
        expect(axios.get).not.toHaveBeenCalled();
        expect(store.getState().search.term).toBe('');
        expect(store.getState().search.results).toEqual([]);
    });
})