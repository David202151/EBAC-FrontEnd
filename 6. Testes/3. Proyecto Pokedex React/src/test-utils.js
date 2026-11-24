import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './app/features/pokemon/pokemonSlice';
import pokemonDetailReducer from './app/features/pokemon/pokemonDetailSlice';
import teamReducer from './app/features/team/teamSlice';

// Creates a test store (no localStorage) with whatever initial state you need
export const makeStore = (preloadedState) =>
  configureStore({
    reducer: {
      pokemon: pokemonReducer,
      team: teamReducer,
      pokemonDetail: pokemonDetailReducer,
    },
    preloadedState,
  });

// Ready-to-use team state for tests
export const teamState = (members) => ({ team: { Myteam: members } });

export const pikachu = { name: 'pikachu', types: ['electric'], image: 'pikachu.png' };
export const bulbasaur = { name: 'bulbasaur', types: ['grass', 'poison'], image: 'bulbasaur.png' };

// Renders with Provider (Redux) and MemoryRouter (routes), like the real app
export function renderWithProviders(ui, { preloadedState, route = '/', path } = {}) {
  const store = makeStore(preloadedState);
  const content = path ? (
    <Routes>
      <Route path={path} element={ui} />
    </Routes>
  ) : (
    ui
  );
  return {
    store,
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{content}</MemoryRouter>
      </Provider>
    ),
  };
}
