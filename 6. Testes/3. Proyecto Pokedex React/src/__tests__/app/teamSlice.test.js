import reducer, {
  addPokemon,
  removePokemon,
  clearTeam,
  selectTeam,
  MAX_TEAM_SIZE,
} from '../../app/features/team/teamSlice';

const pikachu = { name: 'pikachu', types: ['electric'], image: 'pikachu.png' };
const initial = { Myteam: [] };

describe('teamSlice', () => {
  test('starts with an empty team', () => {
    expect(reducer(undefined, { type: 'desconocida' })).toEqual({ Myteam: [] });
  });

  test('addPokemon adds a Pokémon with name, types and image', () => {
    const state = reducer(initial, addPokemon(pikachu));
    expect(state.Myteam).toEqual([pikachu]);
  });

  test('addPokemon does not add a duplicate Pokémon (case-insensitive)', () => {
    let state = reducer(initial, addPokemon(pikachu));
    state = reducer(state, addPokemon({ ...pikachu, name: 'PIKACHU' }));
    expect(state.Myteam).toHaveLength(1);
  });

  test(`addPokemon respects the limit of ${MAX_TEAM_SIZE} Pokémon`, () => {
    let state = initial;
    for (let i = 1; i <= MAX_TEAM_SIZE + 2; i++) {
      state = reducer(state, addPokemon({ name: `pokemon-${i}`, types: [], image: null }));
    }
    expect(state.Myteam).toHaveLength(MAX_TEAM_SIZE);
  });

  test('addPokemon ignores a payload without a name', () => {
    expect(reducer(initial, addPokemon({})).Myteam).toEqual([]);
  });

  test('removePokemon removes a Pokémon by name', () => {
    const state = reducer({ Myteam: [pikachu] }, removePokemon('pikachu'));
    expect(state.Myteam).toEqual([]);
  });

  test('clearTeam empties the team', () => {
    const state = reducer({ Myteam: [pikachu, { ...pikachu, name: 'eevee' }] }, clearTeam());
    expect(state.Myteam).toEqual([]);
  });

  test('selectTeam returns the team from the global state', () => {
    const globalState = { team: { Myteam: [pikachu] } };
    expect(selectTeam(globalState)).toEqual([pikachu]);
  });
});
