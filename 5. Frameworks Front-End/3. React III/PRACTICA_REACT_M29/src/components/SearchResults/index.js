import Song from '../Song';
import Header from '../Header';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar';
const SearchResults = ({results, onAdd, onSearch, isLoading, error, onRetry, searchTerm}) => {
    const renderResults = () => {
        if (isLoading) return <p>Cargando...</p>;
        if (searchTerm === '')  return <p>Ingresa el nombre de un artista</p>;
        if (error) return (
                    <div>
                    <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
                    <button onClick={onRetry}>Reintentar</button>
                    </div>
                );
        if (results.length === 0) return <p>No se encontraron álbumes de {searchTerm}.</p>;
        return results.map(song => <Song 
                                        className="search-result"
                                        key={song.id}
                                        id={song.id}
                                        title={song.title}
                                        artist={song.artist}
                                        year={song.year}
                                        onAdd={onAdd}
                                    />);
    };
    return(
        <article>
            <Header appName="Biblioteca Musical"/>
            <SearchBar onSearch={onSearch} />
            <section className="search-results">
                <h2>Resultados de la búsqueda</h2>
                {renderResults()}
            </section>
            <Link to="/biblioteca" className='ver-biblioteca'>Ver mi biblioteca</Link>
        </article>
    ); 
}; 

export default SearchResults;