import React, { Fragment } from "react"; 
import useFetchMovies from "../Hooks/useFetchMovies"; // Custom Hook
// Custom Hooks -----> DRY Don´t repeat yourself, use custom hooks to avoid code repetition

const MoviesList = () => {
    const {movies, isLoading, error} = useFetchMovies(); // Custom Hook

    const renderMovies = () => (
        <section>
        {
            movies.map((movie) => {
            const {id, title, vote_average, poster_path, release_date} = movie;
                return (
                    <article key={id}>
                    <img width="200px" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                    <h3>{title}</h3>
                    <p> Puntuación: {vote_average}</p>
                    <p> Fecha de estreno: {release_date}</p>
                    </article>
                    );
            })
        }
        </section>
    ); 

    const renderContent = () => {
        if (isLoading) return <p>Cargando películas...</p>;
        if (error) return <p>Ocurrió un error al cargar las películas.</p>;
        return renderMovies();
    }
    return (
        <Fragment>
            <h2>Peliculas</h2>
            {
                renderContent()
            }
            
        </Fragment>
    ); 
};
export default MoviesList;