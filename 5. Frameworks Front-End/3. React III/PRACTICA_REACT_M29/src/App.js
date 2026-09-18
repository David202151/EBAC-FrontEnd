import { Route, Routes, useParams } from 'react-router-dom';
import Library from './components/Library';
import SearchResults from './components/SearchResults';
import {useState, useEffect} from 'react';
import SongDetail from './components/SongDetail';
import useFetch from './components/Hooks/useFetch';

function App() {
  const [librarySongs, setLibrarySongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const url = searchTerm
  ? `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${encodeURIComponent(searchTerm)}`
  : null;
  const {data, isLoading, error, refetch} = useFetch(url); 
  const albums = data?.album ?? [];
  const results = albums.map((album) => ({
    id: album.idAlbum,
    title: album.strAlbum,
    artist: album.strArtist,
    year: album.intYearReleased
  }));
  
  const addToLibrary = (song) =>{
    setLibrarySongs(prevLibrarySongs => [...prevLibrarySongs, song]);
  }; 
  useEffect(() => {
      console.log('La biblioteca se actualizo:', librarySongs);
  }, [librarySongs]);
  return (
    <div className="App">
      <Routes>
        <Route path="/biblioteca" element={<Library results={librarySongs} />} />
        <Route path = '/' element={<SearchResults results={results} onAdd={addToLibrary} onSearch={setSearchTerm} isLoading = {isLoading} error = {error} onRetry={refetch} searchTerm = {searchTerm}/>} />
        <Route path = '/song/:id' element={<SongDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
