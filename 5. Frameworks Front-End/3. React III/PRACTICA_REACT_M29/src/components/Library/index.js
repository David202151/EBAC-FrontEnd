import Song from "../Song";
import {Link} from "react-router-dom"
const Library = ({ results }) => {
    return(
        <article>
            <section className="library">
                <h2>Biblioteca Musical</h2>
                {
                    results.map(song => {
                        return(
                            <Song className="song" 
                            key={song.id}
                            id={song.id}
                            title={song.title}
                            artist={song.artist}
                            year={song.year}
                            />
                        ); 
                    })
                }
            </section>
            <Link to="/" className='ver-index'>Volver al home</Link>
        </article>
    ); 
}; 

export default Library;