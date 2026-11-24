import { useSelector } from "react-redux";
import PokemonCard from "../components/PokemonCard";
import { selectTeam, MAX_TEAM_SIZE } from '../app/features/team/teamSlice';
import AddToTeamButton from "../components/AddToTeamButton";
import { usePokemons } from "../hooks/usePokemons";

function Home() {
    const { pokemons, status, error } = usePokemons();
    const team = useSelector(selectTeam); 
    const teamCount = team.length;
    return(
        <div className="container">
            <h1 className="page-title">Pokédex</h1>
            {
            status === 'loading' || status === 'idle' ? (
                <p className="status-message">Esperando para cargar los Pokémon...</p>
            ) : error ? (
                <p className="status-message">Error: {error}</p>
            ) : pokemons.length === 0 ? (
                <p className="status-message">No hay Pokémon disponibles</p>
            ) : (
                <section>
                    <p className="team-counter">Pokémon en tu equipo: {teamCount} de {MAX_TEAM_SIZE}</p>
                    <div className="pokemon-grid">
                        {pokemons.map((pokemon) => (
                            <PokemonCard key={pokemon.name} pokemon={pokemon} >
                                <AddToTeamButton pokemon={pokemon} />
                            </PokemonCard>
                        ))}
                    </div>
                </section>
            )
        }
        </div>
    )
}

export default Home; 