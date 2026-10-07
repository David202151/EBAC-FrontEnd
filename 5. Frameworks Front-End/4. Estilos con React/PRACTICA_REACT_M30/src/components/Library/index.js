import Song from "../Song";
import { LibrarySection, HomeLink } from "./styles";
const Library = ({ results }) => {
    return(
        <article>
            <LibrarySection>
                <h2>Biblioteca Musical</h2>
                {
                    results.map(song => {
                        return(
                            <Song
                            key={song.id}
                            id={song.id}
                            title={song.title}
                            artist={song.artist}
                            year={song.year}
                            />
                        ); 
                    })
                }
            </LibrarySection>
            <HomeLink to="/">Volver al home</HomeLink>
        </article>
    ); 
}; 

export default Library;