import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearTeam, removePokemon, selectTeam, MAX_TEAM_SIZE } from '../app/features/team/teamSlice';
import PokemonCard from '../components/PokemonCard';

const Team = () => {
  const team = useSelector(selectTeam);
  const dispatch = useDispatch();

  return (
    <div className="container team">
      <h1 className="page-title">Mi equipo</h1>

      {team.length === 0 ? (
        <div className="team__empty">
          <p className="status-message">Aún no tienes Pokémon en tu equipo</p>
          <Link to="/" className="btn btn--primary">Elegir Pokémon</Link>
        </div>
      ) : (
        <section>
          <div className="team__toolbar">
            <p className="team-counter">Pokémon en tu equipo: {team.length} de {MAX_TEAM_SIZE}</p>
            <button
              type="button"
              className="btn btn--secondary"
              onClick={() => dispatch(clearTeam())}
            >
              Limpiar equipo
            </button>
          </div>

          <div className="pokemon-grid">
            {team.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon}>
                <button
                  type="button"
                  className="btn btn--outline"
                  onClick={() => dispatch(removePokemon(pokemon.name))}
                >
                  Quitar del equipo
                </button>
              </PokemonCard>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Team;
