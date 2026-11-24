import { screen } from '@testing-library/react';
import axios from 'axios';
import Detail from '../../pages/Detail';
import { renderWithProviders } from '../../test-utils';

jest.mock('axios', () => ({ get: jest.fn() }));

const apiPikachu = {
  data: {
    name: 'pikachu',
    height: 4,
    weight: 60,
    types: [{ type: { name: 'electric' } }],
    abilities: [{ ability: { name: 'static' } }, { ability: { name: 'lightning-rod' } }],
    sprites: { front_default: 'pikachu.png' },
  },
};

const renderDetail = (name) =>
  renderWithProviders(<Detail />, { route: `/pokemon/${name}`, path: '/pokemon/:name' });

describe('Detail (page)', () => {
  beforeEach(() => jest.clearAllMocks());

  test('shows the waiting message while loading', () => {
    axios.get.mockReturnValue(new Promise(() => {})); // never resolves
    renderDetail('pikachu');
    expect(screen.getByText('Esperando datos del Pokémon...')).toBeInTheDocument();
  });

  test('shows image, types, height, weight and abilities', async () => {
    axios.get.mockResolvedValue(apiPikachu);
    renderDetail('pikachu');

    expect(await screen.findByAltText('pikachu')).toHaveAttribute('src', 'pikachu.png');
    expect(screen.getByText('electric')).toHaveClass('type-badge--electric');
    expect(screen.getByText('0.4 m')).toBeInTheDocument(); // 4 dm → 0.4 m
    expect(screen.getByText('6 kg')).toBeInTheDocument(); // 60 hg → 6 kg
    expect(screen.getByText('static')).toBeInTheDocument();
    expect(screen.getByText('lightning-rod')).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/pikachu');
  });

  test('includes the back link and the add-to-team button', async () => {
    axios.get.mockResolvedValue(apiPikachu);
    renderDetail('pikachu');

    expect(await screen.findByRole('button', { name: 'Agregar al equipo' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Volver a la Pokédex/ })).toHaveAttribute('href', '/');
  });

  test('shows the error message when the Pokémon does not exist', async () => {
    axios.get.mockRejectedValue(new Error('Request failed with status code 404'));
    renderDetail('abc');

    expect(await screen.findByText(/Revisa la información ingresada/)).toBeInTheDocument();
  });
});
