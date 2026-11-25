import { renderWithProviders } from "../../test-utils";
import { screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import App from "../../App";

jest.mock('axios', () => ({ get: jest.fn() }));

const mockData = {
    "album":[
        {
            "idAlbum":"2115886",
            "strAlbum":"Thursday",
            "strArtist":"The Weeknd",
            "intYearReleased":"2011"
        }]
}; 

describe('App Component', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    });
    it('should render Header, SearchBar and SearchResults on the home page', () => {
        renderWithProviders(<App/>)
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Buscar' })).toBeInTheDocument();
        expect(screen.getByText('Biblioteca Musical')).toBeInTheDocument();
        expect(screen.getByText('Ingresa el nombre de un artista')).toBeInTheDocument();
        expect(screen.getByText('Resultados de la búsqueda')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Ver mi biblioteca' })).toBeInTheDocument();
    }); 
    it('should navigate to the library when clicking Ver mi biblioteca', () => {
        renderWithProviders(<App/>)
        const link = screen.getByRole('link', { name: 'Ver mi biblioteca' }); 
        fireEvent.click(link);
        expect(screen.getByText('No hay canciones en tu biblioteca')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Volver al home' })).toBeInTheDocument();
        const text = screen.queryByText("Resultados de la búsqueda"); 
        expect(text).not.toBeInTheDocument();
    }); 
    it('should show the added song in the library after searching and adding it', async () => {
        axios.get.mockResolvedValueOnce({ data: mockData });
        renderWithProviders(<App/>)
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'The Weeknd'}});
        const button =  screen.getByRole('button', { name: 'Buscar' }); 
        fireEvent.click(button);
        await screen.findByText('Thursday'); 
        const addLibrary = screen.getByRole('button', { name: 'Agregar a mi biblioteca' });
        fireEvent.click(addLibrary);
        const link = screen.getByRole('link', { name: 'Ver mi biblioteca' }); 
        fireEvent.click(link); 
        expect(screen.getByText('Thursday')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Volver al home' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Eliminar' })).toBeInTheDocument();
    }); 
}); 
