/* 
JAVASCRIPT
import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4801d4344bbf19abbe3fff7849117a6c'); 
                setMovies(response.data.results);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        }
        fetchMovies();
    }, []); 
    return {movies, isLoading, error};
}

export default useFetchMovies;
*/

// TYPESCRIPT 
import { useState, useEffect } from "react";
import axios from "axios";

type Movies = {
    id: number; 
    title: string; 
    vote_average : number; 
    release_date: string; 
    poster_path: string; 
}

type FetchMovieState = {
    movies: Movies[]; 
    isLoading: boolean; 
    error: string | null; 
}

const useFetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [ moviesState, setMoviesState ] = useState<FetchMovieState>({movies: [], isLoading: true, error: null}); 
    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4801d4344bbf19abbe3fff7849117a6c'); 
                setMoviesState({movies : response.data.results, isLoading: false, error:null});
            } catch (error) {
                setMoviesState({movies : [], isLoading: false, error:'Failed to fetch movies'});
            }
        }
        fetchMovies();
    }, []); 
    return moviesState;
}

export default useFetchMovies;