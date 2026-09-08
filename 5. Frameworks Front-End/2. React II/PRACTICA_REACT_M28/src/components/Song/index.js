
const Song =({id, title, artist, duration, year, onAdd}) => {
  return (
    <article className="song">
        <h3>{title}</h3>
        <p>Artista: {artist}</p>
        <p>Duración: {duration}</p>
        <p>Año: {year}</p>
        <button onClick={() => onAdd({ id, title, artist, duration, year })}>
            Agregar a mi biblioteca
        </button>
    </article>
  );
}

export default Song;