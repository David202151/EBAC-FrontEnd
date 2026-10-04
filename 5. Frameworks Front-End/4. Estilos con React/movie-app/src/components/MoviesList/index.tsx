import React, { Fragment } from "react"; 
import useFetchMovies from "../Hooks/useFetchMovies"; // Custom Hook
import Header from "../Header";
import './MoviesList.css';
import { AppButton, MovieElement, MovieImage, MovieInfo, MovieSection, MovieTitle } from "./styles";
// Custom Hooks -----> DRY Don´t repeat yourself, use custom hooks to avoid code repetition

const MoviesList = () => {
    const {movies, isLoading, error} = useFetchMovies(); // Custom Hook

    const renderMovies = () => (
        <MovieSection>
        {
            movies.map((movie) => {
            const {id, title, vote_average, poster_path, release_date} = movie;
                return (
                    <MovieElement key={id}>
                    {/* El ancho ahora lo controla .movies__poster (antes width="200px") */}
                    <MovieImage src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                    <MovieTitle>{title}</MovieTitle>
                    <MovieInfo score={vote_average}> Puntuación: <span>{vote_average}</span></MovieInfo>
                    <MovieInfo releaseDate={release_date}> Fecha de estreno: <span>{release_date}</span></MovieInfo>
                    <AppButton> Ver detalles</AppButton>
                    </MovieElement>
                    );
            })
        }
        </MovieSection>
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