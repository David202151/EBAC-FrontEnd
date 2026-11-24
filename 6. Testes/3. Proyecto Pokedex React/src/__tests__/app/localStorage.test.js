import { loadTeam, saveTeam } from '../../app/localStorage';

const KEY = 'pokedex_team';

describe('localStorage (team)', () => {
  beforeEach(() => localStorage.clear());

  test('loadTeam returns [] when nothing is saved', () => {
    expect(loadTeam()).toEqual([]);
  });

  test('saveTeam stores the team as JSON text', () => {
    saveTeam([{ name: 'pikachu' }]);
    expect(localStorage.getItem(KEY)).toBe('[{"name":"pikachu"}]');
  });

  test('loadTeam restores what saveTeam saved', () => {
    const team = [{ name: 'pikachu', types: ['electric'], image: 'p.png' }];
    saveTeam(team);
    expect(loadTeam()).toEqual(team);
  });

  test('loadTeam returns [] when the saved text is corrupt', () => {
    localStorage.setItem(KEY, 'hola');
    expect(loadTeam()).toEqual([]);
  });

  test('loadTeam returns [] when the saved value is not an array', () => {
    localStorage.setItem(KEY, '{}');
    expect(loadTeam()).toEqual([]);
  });
});
