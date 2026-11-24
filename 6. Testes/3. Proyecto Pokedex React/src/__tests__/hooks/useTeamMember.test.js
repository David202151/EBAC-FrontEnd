import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useTeamMember } from '../../hooks/useTeamMember';
import { makeStore, teamState, pikachu } from '../../test-utils';
import { MAX_TEAM_SIZE } from '../../app/features/team/teamSlice';

const renderUseTeamMember = (name, members) => {
  const store = makeStore(teamState(members));
  const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  return renderHook(() => useTeamMember(name), { wrapper });
};

describe('useTeamMember', () => {
  test('with an empty team: not added, not full, count is 0', () => {
    const { result } = renderUseTeamMember('pikachu', []);
    expect(result.current).toEqual({ isAdded: false, teamFull: false, teamCount: 0 });
  });

  test('detects that the Pokémon is already on the team (case-insensitive)', () => {
    const { result } = renderUseTeamMember('PIKACHU', [pikachu]);
    expect(result.current.isAdded).toBe(true);
    expect(result.current.teamCount).toBe(1);
  });

  test('reports the team as full when the maximum is reached', () => {
    const members = Array.from({ length: MAX_TEAM_SIZE }, (_, i) => ({
      name: `pokemon-${i}`,
      types: [],
      image: null,
    }));
    const { result } = renderUseTeamMember('eevee', members);
    expect(result.current.teamFull).toBe(true);
    expect(result.current.isAdded).toBe(false);
  });
});
