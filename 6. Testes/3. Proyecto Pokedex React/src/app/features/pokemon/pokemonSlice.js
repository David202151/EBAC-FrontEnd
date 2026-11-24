import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import API_URL from '../../../config/api';

export const fetchPokemons = createAsyncThunk(
	'pokemon/fetchPokemons',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`${API_URL}/?limit=20`
			);
            const promesas = response.data.results.map(async (pokemon) => {
                const pokemonResponse = await axios.get(pokemon.url);
                return pokemonResponse.data;
            });
            const pokemons = await Promise.all(promesas);
			return pokemons.map((pokemon) => ({
                name: pokemon.name,
                types: pokemon.types.map((type) => type.type.name),
                image: pokemon.sprites.front_default
            }));
		} catch (error) {
			return rejectWithValue(
				error.response?.data?.message || error.message || 'Error al obtener los Pokémon'
			);
		}
	}
);



const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState: {
		pokemons: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPokemons.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(fetchPokemons.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.pokemons = action.payload;
			})
			.addCase(fetchPokemons.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload || action.error.message;
			});
	},
});

export default pokemonSlice.reducer;
