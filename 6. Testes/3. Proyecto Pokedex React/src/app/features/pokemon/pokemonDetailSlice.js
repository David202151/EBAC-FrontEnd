import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPokemon } from '../../../services/pokemonService';

export const fetchPokemonDetail = createAsyncThunk(
	'pokemonDetail/fetchPokemonDetail',
	async (name) => {
		const pokemon = await getPokemon(name);

		return {
			name: pokemon.name,
			types: pokemon.types.map((type) => type.type.name),
			image: pokemon.sprites.front_default,
			height: pokemon.height,
			weight: pokemon.weight,
			abilities: pokemon.abilities.map((ability) => ability.ability.name),
		};
	}
);

const initialState = {
    pokemon: null,
	status: 'idle',
	error: null,
};

const pokemonDetailSlice = createSlice({
	name: 'pokemonDetail',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPokemonDetail.pending, (state) => {
				state.status = 'loading';
				state.error = null;
                state.pokemon = null; 
			})
			.addCase(fetchPokemonDetail.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.pokemon = action.payload;
			})
			.addCase(fetchPokemonDetail.rejected, (state, action) => {
				state.status = 'failed';
				state.error = 'Revisa la información ingresada';
			});
	},
});

export default pokemonDetailSlice.reducer;
