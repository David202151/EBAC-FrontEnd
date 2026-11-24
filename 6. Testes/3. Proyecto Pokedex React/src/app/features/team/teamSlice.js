import { createSlice } from '@reduxjs/toolkit';

const MAX_TEAM_SIZE = 6;

const initialState = {
	Myteam: [],
};

const getPokemonImage = (pokemon) => {
	return pokemon.image ?? null;
};

const getPokemonTypes = (pokemon) => {
	return (pokemon.types ?? []).map((type) =>
		typeof type === 'string' ? type : type.type?.name
	).filter(Boolean);
}

const teamSlice = createSlice({
	name: 'Myteam',
	initialState,
	reducers: {
		addPokemon: (state, action) => {
			const pokemon = action.payload;
			if (!pokemon?.name || state.Myteam.length >= MAX_TEAM_SIZE) return;

			const name = pokemon.name.trim();
			if (!name || state.Myteam.some((member) => member.name.toLowerCase() === name.toLowerCase())) {
				return;
			}

			state.Myteam.push({
				name,
				types: getPokemonTypes(pokemon),
				image: getPokemonImage(pokemon),
			});
		},
		removePokemon: (state, action) => {
			const name = typeof action.payload === 'string' ? action.payload : action.payload?.name;
			if (!name) return;
			state.Myteam = state.Myteam.filter((member) => member.name.toLowerCase() !== name.toLowerCase());
		},
		clearTeam: (state) => {
			state.Myteam = [];
		},
	},
});

export const { addPokemon, removePokemon, clearTeam } = teamSlice.actions;
export const selectTeam = (state) => state.team.Myteam;
export default teamSlice.reducer;
export { MAX_TEAM_SIZE };