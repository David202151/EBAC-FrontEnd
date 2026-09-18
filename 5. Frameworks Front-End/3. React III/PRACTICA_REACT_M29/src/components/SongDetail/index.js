import {Link, useParams} from 'react-router-dom'; 
import useFetch from '../Hooks/useFetch';
import Song from '../Song';
const SongDetail = () => {
    
    const { id } = useParams(); 
    const url = `https://www.theaudiodb.com/api/v1/json/2/album.php?m=${id}`;
    console.log(url); 
    const { data, isLoading, error } = useFetch(url);
    console.log('data', data); 
    const album = data?.album?.[0]; 
    console.log('album', album);
    if (isLoading) return <p>Cargando...</p>;
    if (error) return (
        <div>
        <p>Hubo un problema al cargar los datos</p>
        </div>
    );
    if (!album) return <p>No se encontroinformacion del album.</p>;
    return(
        <article className="detail">
            <Song
                className="search-result"
                key={album.idAlbum}
                id={album.idAlbum}
                title={album.strAlbum}
                artist={album.strArtist}
                year={album.intYearReleased}
            />
            <Link to="/" className='ver-index'>Volver al home</Link>
        </article>
    ); 
    
}; 

export default SongDetail; 


