import Song from '../Song';
import Header from '../Header';
import SearchBar from '../SearchBar';
import { ResultsSection, Message, ErrorBox, LibraryLink } from './styles';
const SearchResults = ({results, onAdd, onSearch, isLoading, error, onRetry, searchTerm}) => {
    const renderResults = () => {
        if (isLoading) return <Message>Cargando...</Message>;
        if (searchTerm === '')  return <Message>Ingresa el nombre de un artista</Message>;
        if (error) return (
                    <ErrorBox $error>
                    <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
                    <button onClick={onRetry}>Reintentar</button>
                    </ErrorBox>
                );
        if (results.length === 0) return <Message>No se encontraron álbumes de {searchTerm}.</Message>;
        return results.map(song => <Song 
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
            <ResultsSection>
                <h2>Resultados de la búsqueda</h2>
                {renderResults()}
            </ResultsSection>
            <LibraryLink to="/biblioteca">Ver mi biblioteca</LibraryLink>
        </article>
    ); 
}; 

export default SearchResults;