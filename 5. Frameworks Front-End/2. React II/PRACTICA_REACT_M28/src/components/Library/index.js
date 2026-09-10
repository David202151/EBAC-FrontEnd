import SongLibrary from "../SongLibrary";

const Library = ({ results }) => {
    return(
        <section className="library">
            <h2>Biblioteca Musical</h2>
            {
                results.map(song => {
                    return(
                        <SongLibrary className="library-song" 
                        key={song.id}
                        title={song.title}
                        artist={song.artist}
                        duration={song.duration}
                        year={song.year}
                        />
                    ); 
                })
            }
        </section>
    ); 
}; 

export default Library;