import Song from '../Song';

const SearchResults = ({results, onAdd}) => {
    return(
        <section className="search-results">
            <h2>Resultados de la búsqueda</h2>
            {results.map(song => {
                return(
                    <Song className="search-result"
                        key={song.id}
                        title={song.title}
                        artist={song.artist}
                        duration={song.duration}
                        year={song.year}
                        onAdd={onAdd}
                    />
                )
            })
        }
        </section>
    ); 
}; 

export default SearchResults;