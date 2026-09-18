import { Link } from "react-router-dom";

const Song =({id, title, artist, year, onAdd, className}) => {
  return (
    <article className= {className} >
        <h3><Link to={`/song/${id}`}>{title}</Link></h3>
        <p>Artista: {artist}</p>
        <p>Año: {year}</p>
        {
           onAdd && <button onClick={() => onAdd({ id, title, artist, year })}>
                      Agregar a mi biblioteca
                    </button>
        }
    </article>
  );
}

export default Song;