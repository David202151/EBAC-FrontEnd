import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonDetail } from "../app/features/pokemon/pokemonDetailSlice";
import AddToTeamButton from "../components/AddToTeamButton";

function Detail() {
    const { name } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPokemonDetail(name));
    }, [dispatch, name]);
    const { pokemon, error } = useSelector((state) => state.pokemonDetail);
    return (
        <article className="container detail">
            <Link className="detail__back" to="/">← Volver a la Pokédex</Link>
            <h1 className="detail__name">{name}</h1>
            {
                error ? (
                    <p className="status-message">Error: {error}</p>
                ) : !name || !pokemon || pokemon.name !== name ? (
                    <p className="status-message">Esperando datos del Pokémon...</p>
                ) : (
                    <section className="detail__card">
                        <img className="detail__image" src={pokemon.image} alt={pokemon.name} />
                        <div className="detail__types">
                            {pokemon.types.map((type) => (
                                <span className={`type-badge type-badge--${type.toLowerCase()}`} key={type}>
                                    {type}
                                </span>
                            ))}
                        </div>
                        <dl className="detail__stats">
                            <div className="detail__stat">
                                <dt className="detail__label">Altura</dt>
                                <dd className="detail__value">{pokemon.height / 10} m</dd>
                            </div>
                            <div className="detail__stat">
                                <dt className="detail__label">Peso</dt>
                                <dd className="detail__value">{pokemon.weight / 10} kg</dd>
                            </div>
                            <div className="detail__stat detail__stat--wide">
                                <dt className="detail__label">Habilidades</dt>
                                <dd className="detail__value">
                                    <ul className="detail__abilities">
                                        {pokemon.abilities.map((ability) => (
                                            <li className="detail__ability" key={ability}>{ability}</li>
                                        ))}
                                    </ul>
                                </dd>
                            </div>
                        </dl>
                        <AddToTeamButton pokemon={pokemon} />
                    </section>
                )
            }
        </article>
    );
}

export default Detail;
