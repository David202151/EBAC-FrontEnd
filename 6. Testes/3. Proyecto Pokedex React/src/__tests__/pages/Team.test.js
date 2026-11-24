import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Team from '../../pages/Team';
import { renderWithProviders, teamState, pikachu, bulbasaur } from '../../test-utils';

describe('Team (page)', () => {
  test('with an empty team shows the message and a link to pick Pokémon', () => {
    renderWithProviders(<Team />);
    expect(screen.getByText('Aún no tienes Pokémon en tu equipo')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Elegir Pokémon' })).toHaveAttribute('href', '/');
    expect(screen.queryByRole('button', { name: 'Limpiar equipo' })).not.toBeInTheDocument();
  });

  test('with members shows one card per Pokémon and the counter', () => {
    renderWithProviders(<Team />, { preloadedState: teamState([pikachu, bulbasaur]) });
    expect(screen.getByRole('heading', { name: 'pikachu' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'bulbasaur' })).toBeInTheDocument();
    expect(screen.getByText('Pokémon en tu equipo: 2 de 6')).toBeInTheDocument();
  });

  test('"Quitar del equipo" removes only that Pokémon', () => {
    const { store } = renderWithProviders(<Team />, {
      preloadedState: teamState([pikachu, bulbasaur]),
    });

    userEvent.click(screen.getAllByRole('button', { name: 'Quitar del equipo' })[0]);

    expect(store.getState().team.Myteam).toEqual([bulbasaur]);
    expect(screen.queryByRole('heading', { name: 'pikachu' })).not.toBeInTheDocument();
  });

  test('"Limpiar equipo" empties the team and shows the empty message', () => {
    const { store } = renderWithProviders(<Team />, {
      preloadedState: teamState([pikachu, bulbasaur]),
    });

    userEvent.click(screen.getByRole('button', { name: 'Limpiar equipo' }));

    expect(store.getState().team.Myteam).toEqual([]);
    expect(screen.getByText('Aún no tienes Pokémon en tu equipo')).toBeInTheDocument();
  });
});
