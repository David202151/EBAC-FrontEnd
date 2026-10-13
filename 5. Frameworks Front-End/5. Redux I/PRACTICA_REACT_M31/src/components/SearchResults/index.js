import Song from '../Song';
import Header from '../Header';
import SearchBar from '../SearchBar';
import { ResultsSection, Message, ErrorBox, LibraryLink } from './styles';
import { useDispatch } from 'react-redux';
import { addSong } from '../../redux/libraryActions';
const SearchResults = ({results, onAdd, onSearch, isLoading, error, onRetry, searchTerm}) => {
    const dispatch = useDispatch();
    const handleAdd = (song) => {
        dispatch(addSong(song));
    }
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
                                        album={song.album}
                                        artist={song.artist}
                                        year={song.year}
                                        onAdd={handleAdd}
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