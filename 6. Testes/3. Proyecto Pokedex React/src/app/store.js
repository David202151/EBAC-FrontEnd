import pokemonDetail from './features/pokemon/pokemonDetailSlice';
import pokemonReducer from './features/pokemon/pokemonSlice';
import teamReducer from './features/team/teamSlice';
import { configureStore } from '@reduxjs/toolkit';
import { loadTeam, saveTeam } from './localStorage';

const store = configureStore({
	reducer: {
		pokemon: pokemonReducer,
		team: teamReducer,
		pokemonDetail: pokemonDetail,  
	},
	preloadedState: {
		team: {
			Myteam: loadTeam(), 
		}
	},
});

store.subscribe(() => {
  saveTeam(store.getState().team.Myteam);
});

export default store;