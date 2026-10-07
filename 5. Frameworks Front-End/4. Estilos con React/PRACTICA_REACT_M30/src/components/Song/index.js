import { Card, Title, TitleLink, Info } from "./styles";

const Song =({id, title, artist, year, onAdd, detail}) => {
  return (
    <Card $detail={detail}>
        <Title><TitleLink to={`/song/${id}`}>{title}</TitleLink></Title>
        <Info>Artista: {artist}</Info>
        <Info>Año: {year}</Info>
        {
           onAdd && <button onClick={() => onAdd({ id, title, artist, year })}>
                      Agregar a mi biblioteca
                    </button>
        }
    </Card>
  );
}

export default Song;