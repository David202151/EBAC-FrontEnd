import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddToTeamButton from '../../components/AddToTeamButton';
import { renderWithProviders, teamState, pikachu, bulbasaur } from '../../test-utils';
import { MAX_TEAM_SIZE } from '../../app/features/team/teamSlice';

describe('AddToTeamButton', () => {
  test('shows "Agregar al equipo" and is enabled', () => {
    renderWithProviders(<AddToTeamButton pokemon={pikachu} />);
    expect(screen.getByRole('button', { name: 'Agregar al equipo' })).toBeEnabled();
  });

  test('adds the Pokémon to the team on click and updates the button', () => {
    const { store } = renderWithProviders(<AddToTeamButton pokemon={pikachu} />);

    userEvent.click(screen.getByRole('button', { name: 'Agregar al equipo' }));

    expect(store.getState().team.Myteam).toEqual([pikachu]);
    const button = screen.getByRole('button', { name: 'En tu equipo ✓' });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('btn--added');
  });

  test('is disabled when the Pokémon is already on the team', () => {
    renderWithProviders(<AddToTeamButton pokemon={pikachu} />, {
      preloadedState: teamState([pikachu]),
    });
    expect(screen.getByRole('button', { name: 'En tu equipo ✓' })).toBeDisabled();
  });

  test('shows a disabled "Equipo completo" when the team is full', () => {
    const members = Array.from({ length: MAX_TEAM_SIZE }, (_, i) => ({
      name: `pokemon-${i}`,
      types: [],
      image: null,
    }));
    renderWithProviders(<AddToTeamButton pokemon={bulbasaur} />, {
      preloadedState: teamState(members),
    });
    expect(screen.getByRole('button', { name: 'Equipo completo' })).toBeDisabled();
  });
});
