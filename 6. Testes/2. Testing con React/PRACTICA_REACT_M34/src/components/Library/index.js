import Song from "../Song";
import { LibrarySection, HomeLink } from "./styles";
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../../redux/slices/librarySlice';


const Library = () => {
    const librarySongs = useSelector((state) => state.library);
    const dispatch = useDispatch();

    return(
        <article>
            <LibrarySection>
                <h2>Biblioteca Musical</h2>
                {librarySongs.length > 0 ? (
                    librarySongs.map(song => {
                        return (
                            <div key={song.id}>
                                <Song
                                    id={song.id}
                                    title={song.title}
                                    album={song.album}
                                    artist={song.artist}
                                    year={song.year}
                                />

                                <button onClick={() => dispatch(removeSong(song.id))}>
                                    Eliminar
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <p>No hay canciones en tu biblioteca</p>
                )}
            </LibrarySection>
            <HomeLink to="/">Volver al home</HomeLink>
        </article>
    ); 
}; 

export default Library;