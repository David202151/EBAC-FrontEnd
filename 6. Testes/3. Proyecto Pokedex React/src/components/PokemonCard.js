import React from 'react';
import { Link } from 'react-router-dom';

function PokemonCard({ pokemon, children }) {
	if (!pokemon) return null;

	const name = pokemon.name || 'Pokémon';
	const notFoundImage = 'https://img.magnific.com/vector-premium/mensaje-flash-error-404-gato-blanco-durmiendo_151150-14322.jpg?semt=ais_hybrid&w=740&q=80'; 
	const image = pokemon.image || notFoundImage; // Imagen de respaldo (gato 404) cuando el Pokémon no tiene imagen
	const types = pokemon.types || [];

	return (
		<article className="pokemon-card">
			<img className={`pokemon-card__image ${pokemon.image ? '' : 'pokemon-card__image--not-found'}`} src={image} alt={name}/>
			<Link to={`/pokemon/${name}`}><h2 className="pokemon-card__name">{name}</h2></Link>
			<div className="pokemon-card__types">
				{types.map(( type ) => (
					<span className={`type-badge type-badge--${type.toLowerCase()}`} key={type}>
						{type}
					</span>
				))}
			</div>
			{children}
		</article>
	);
}

export default PokemonCard;
