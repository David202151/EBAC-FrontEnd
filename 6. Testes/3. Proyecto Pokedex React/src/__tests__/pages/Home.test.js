import { screen } from '@testing-library/react';
import axios from 'axios';
import Home from '../../pages/Home';
import { renderWithProviders, teamState, pikachu } from '../../test-utils';

// Axios is mocked so the real PokéAPI is never called
jest.mock('axios', () => ({ get: jest.fn() }));

const apiPokemon = (name, type) => ({
  data: {
    name,
    types: [{ type: { name: type } }],
    sprites: { front_default: `${name}.png` },
  },
});

describe('Home (page)', () => {
  beforeEach(() => jest.clearAllMocks());

  test('shows the waiting message and then the Pokémon list', async () => {
    axios.get.mockImplementation((url) => {
      if (url.includes('?limit=20')) {
        return Promise.resolve({
          data: {
            results: [
              { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25' },
              { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4' },
            ],
          },
        });
      }
      return Promise.resolve(
        url.endsWith('/25') ? apiPokemon('pikachu', 'electric') : apiPokemon('charmander', 'fire')
      );
    });

    renderWithProviders(<Home />);

    expect(screen.getByText('Esperando para cargar los Pokémon...')).toBeInTheDocument();
    expect(await screen.findByRole('heading', { name: 'pikachu' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'charmander' })).toBeInTheDocument();
    expect(screen.getByText('electric')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Agregar al equipo' })).toHaveLength(2);
  });

  test('shows the team counter next to the list', async () => {
    axios.get.mockImplementation((url) =>
      url.includes('?limit=20')
        ? Promise.resolve({
            data: { results: [{ name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25' }] },
          })
        : Promise.resolve(apiPokemon('pikachu', 'electric'))
    );

    renderWithProviders(<Home />, { preloadedState: teamState([pikachu]) });

    expect(await screen.findByText('Pokémon en tu equipo: 1 de 6')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'En tu equipo ✓' })).toBeDisabled();
  });

  test('shows an error when the request fails', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    renderWithProviders(<Home />);

    expect(await screen.findByText(/Error: /)).toBeInTheDocument();
  });
});
