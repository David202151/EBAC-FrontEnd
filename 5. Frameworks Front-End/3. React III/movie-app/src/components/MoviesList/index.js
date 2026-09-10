import React, { Fragment, useState, useEffect } from "react"; 
import axios from "axios";
const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => { 
        const fetchMovies = async () =>{
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/movie/popular?api_key=4801d4344bbf19abbe3fff7849117a6c'
                ); 
                console.log(response); 
                setMovies(response.data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setError(error);
                setLoading(false);
            }
        }

        fetchMovies();
    }, []);

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
        if (loading) return <p>Cargando películas...</p>;
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