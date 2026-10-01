import React, { Fragment } from "react"; 
import useFetchMovies from "../Hooks/useFetchMovies"; // Custom Hook
import Header from "../Header";
import './MoviesList.css';
import { AppButton } from "./styles";
// Custom Hooks -----> DRY Don´t repeat yourself, use custom hooks to avoid code repetition

const MoviesList = () => {
    const {movies, isLoading, error} = useFetchMovies(); // Custom Hook

    const renderMovies = () => (
        <section className="movies__grid">
        {
            movies.map((movie) => {
            const {id, title, vote_average, poster_path, release_date} = movie;
                return (
                    <article className="movies__card" key={id}>
                    {/* El ancho ahora lo controla .movies__poster (antes width="200px") */}
                    <img className="movies__poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                    <h3 className="movies__name">{title}</h3>
                    <p className="movies__info movies__info--rating"> Puntuación: {vote_average}</p>
                    <p className="movies__info"> Fecha de estreno: {release_date}</p>
                    <AppButton> Ver detalles</AppButton>
                    </article>
                    );
            })
        }
        </section>
    );

    const renderContent = () => {
        if (isLoading) return <p className="movies__status">Cargando películas...</p>;
        if (error) return <p className="movies__status movies__status--error">Ocurrió un error al cargar las películas.</p>;
        return renderMovies();
    }
    return (
        <Fragment>
            <Header appName="Movie App"/>
            <h2 className="movies__title">Peliculas</h2>
            {
                renderContent()
            }
            
        </Fragment>
    ); 
};
export default MoviesList;