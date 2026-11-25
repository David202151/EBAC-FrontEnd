import SearchResults from "../SearchResults";
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from "../../test-utils";
import axios from 'axios';

jest.mock('axios', () => ({ get: jest.fn() }));

const mockSongs = [
    {
        id: '1',
        title: 'Kyougen',
        album: 'Kyougen',
        artist: 'Ado',
        year: '2022'
    }, 
    {
        id: '2',
        title: 'Flowers',
        album: 'Flowers',
        artist: 'Miley Cyrus',
        year: '2020'
    }
]

const preloadedState = {
    search: {
        term: 'Ado',
        results: mockSongs,
        loading: false,
        error: ''
    }
};

describe('SearchResults Component', () => {
    it('should render the search results correctly', () => {
        renderWithProviders(<SearchResults/>,  preloadedState );
        expect(screen.getByText('Kyougen')).toBeInTheDocument();
        expect(screen.getByText('Flowers')).toBeInTheDocument();
    }); 

    it('Each song displays title, artist, and album.', () => {
        renderWithProviders(<SearchResults/>,  preloadedState );
        expect(screen.getByText('Kyougen')).toBeInTheDocument();
        expect(screen.getByText('Artista: Ado')).toBeInTheDocument();
        expect(screen.getByText('Álbum: Kyougen')).toBeInTheDocument();
        expect(screen.getByText('Año: 2022')).toBeInTheDocument();

        expect(screen.getByText('Flowers')).toBeInTheDocument();
        expect(screen.getByText('Artista: Miley Cyrus')).toBeInTheDocument();
        expect(screen.getByText('Álbum: Flowers')).toBeInTheDocument();
        expect(screen.getByText('Año: 2020')).toBeInTheDocument();
    });
    it('should call the onAdd function when the "Agregar a mi biblioteca" button is clicked', () => {
        
        const store = renderWithProviders(<SearchResults/>,  preloadedState ).store;
        const addButtons = screen.getAllByRole('button', { name: 'Agregar a mi biblioteca' });
        fireEvent.click(addButtons[0]);
        expect(store.getState().library).toContainEqual(mockSongs[0]);
    });
    it('should not add the same song twice to the library', () => {
        const store = renderWithProviders(<SearchResults/>, preloadedState).store;
        const addButtons = screen.getAllByRole('button', { name: 'Agregar a mi biblioteca' });
        fireEvent.click(addButtons[0]);
        fireEvent.click(addButtons[0]);
        expect(store.getState().library).toEqual([mockSongs[0]]);
    });
    it('should retry the search when the "Reintentar" button is clicked', async () => {
        axios.get.mockResolvedValueOnce({ data: { album: [] } });
        renderWithProviders(<SearchResults/>, {
            search: { loading: false, error: 'Ha ocurrido un error', term: 'Ado', results: [] }
        });
        expect(screen.getByText('Hubo un problema al cargar los datos. Intenta nuevamente.')).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button', { name: 'Reintentar' }));
        expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('Ado'));
        expect(await screen.findByText('No se encontraron álbumes de Ado.')).toBeInTheDocument();
    });
})