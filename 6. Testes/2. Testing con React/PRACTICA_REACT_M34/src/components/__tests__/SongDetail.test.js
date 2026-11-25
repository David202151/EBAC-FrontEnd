import { screen } from '@testing-library/react';
import axios from 'axios';
import App from '../../App';
import { renderWithProviders } from '../../test-utils';

jest.mock('axios', () => ({ get: jest.fn() }));

const mockAlbum = {
    album: [
        {
            idAlbum: '2115886',
            strAlbum: 'Thursday',
            strArtist: 'The Weeknd',
            intYearReleased: '2011'
        }
    ]
};

const renderSongDetail = () => renderWithProviders(<App />, undefined, '/song/2115886');

describe('SongDetail Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        console.log.mockRestore();
    });

    it('should show a loading message while fetching', async () => {
        axios.get.mockResolvedValueOnce({ data: mockAlbum });
        renderSongDetail();
        expect(screen.getByText('Cargando...')).toBeInTheDocument();
        await screen.findByText('Thursday');
    });

    it('should request the album using the id from the URL', async () => {
        axios.get.mockResolvedValueOnce({ data: mockAlbum });
        renderSongDetail();
        await screen.findByText('Thursday');
        expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('album.php?m=2115886'));
    });

    it('should show the album details when the request succeeds', async () => {
        axios.get.mockResolvedValueOnce({ data: mockAlbum });
        renderSongDetail();
        expect(await screen.findByText('Thursday')).toBeInTheDocument();
        expect(screen.getByText('Artista: The Weeknd')).toBeInTheDocument();
        expect(screen.getByText('Año: 2011')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Volver al home' })).toBeInTheDocument();
        expect(screen.queryByRole('button', { name: 'Agregar a mi biblioteca' })).not.toBeInTheDocument();
    });

    it('should show an error message when the request fails', async () => {
        axios.get.mockRejectedValueOnce(new Error('API Error'));
        renderSongDetail();
        expect(await screen.findByText('Hubo un problema al cargar los datos')).toBeInTheDocument();
    });

    it('should show a not-found message when the API returns no album', async () => {
        axios.get.mockResolvedValueOnce({ data: { album: null } });
        renderSongDetail();
        expect(await screen.findByText('No se encontroinformacion del album.')).toBeInTheDocument();
    });
});
