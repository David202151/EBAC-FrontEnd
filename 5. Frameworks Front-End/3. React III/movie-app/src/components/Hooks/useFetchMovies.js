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