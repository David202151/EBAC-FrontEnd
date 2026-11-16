import Song from "../Song";
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from "../../test-utils";

const song = {
    id: '1',
    title: 'Kyougen',
    album: 'Kyougen',
    artist: 'Ado',
    year: '2022'
};

describe('Song Component', () => {
    it('should render the song details correctly', () => {
        renderWithProviders(<Song { ...song } />);
        expect(screen.getByText('Kyougen')).toBeInTheDocument();
        expect(screen.getByText('Álbum: Kyougen')).toBeInTheDocument();
        expect(screen.getByText('Artista: Ado')).toBeInTheDocument();
        expect(screen.getByText('Año: 2022')).toBeInTheDocument();
    });
    it('without onAdd prop, there is no button', () => {
        renderWithProviders(<Song { ...song } />);
        const button = screen.queryByRole('button', { name: 'Agregar a mi biblioteca' });
        expect(button).not.toBeInTheDocument();
    });
    it('with onAdd prop, button is present and calls the function when clicked', () => {
        const mockAdd = jest.fn();
        renderWithProviders(<Song { ...song } onAdd={mockAdd} />);
        const button = screen.queryByRole('button', { name: 'Agregar a mi biblioteca' });
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(mockAdd).toHaveBeenCalledTimes(1);
        expect(mockAdd).toHaveBeenCalledWith(song);
    });
});