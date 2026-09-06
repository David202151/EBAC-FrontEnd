import React, { Fragment, useState, useEffect } from "react"; 

const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => { 
        const fetchMovies = async () =>{
            const response =  [
                { id: 1, title: "The Shawshank Redemption", year: 1994 },
                { id: 2, title: "The Godfather", year: 1972 },
                { id: 3, title: "The Dark Knight", year: 2008 },
                { id: 4, title: "Pulp Fiction", year: 1994 },
                { id: 5, title: "Forrest Gump", year: 1994 },
            ];
            setMovies(response);
            
        }

        fetchMovies();
    }, []);

    return (
        <Fragment>
            <h2>Peliculas</h2>
            <section>
                {
                    movies.map((movie) => {
                        const {id, title, year} = movie;
                        return (
                            <article key={id}>
                                <h3>{title}</h3>
                                <p>{year}</p>
                            </article>
                        );
                    })
                }
            </section>
        </Fragment>
    ); 
};
export default MoviesList;