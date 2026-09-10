
const Song =({id, title, artist, duration, year}) => {
  return (
    <article className="song" key={id}>
        <h3>{title}</h3>
        <p>Artista: {artist}</p>
        <p>Duración: {duration}</p>
        <p>Año: {year}</p>
    </article>
  );
}

export default Song;