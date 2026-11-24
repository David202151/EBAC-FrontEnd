import { screen } from '@testing-library/react';
import Header from '../../components/Header';
import { renderWithProviders, teamState, pikachu, bulbasaur } from '../../test-utils';

describe('Header', () => {
  test('shows the navigation links', () => {
    renderWithProviders(<Header />);
    expect(screen.getByRole('link', { name: 'Inicio' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /Mi equipo/ })).toHaveAttribute('href', '/team');
  });

  test('shows the counter with the number of Pokémon on the team', () => {
    renderWithProviders(<Header />, { preloadedState: teamState([pikachu, bulbasaur]) });
    expect(screen.getByRole('link', { name: /Mi equipo/ })).toHaveTextContent('2');
  });
});
