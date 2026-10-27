import { Route, Routes } from 'react-router-dom';
import Library from './components/Library';
import SearchResults from './components/SearchResults';
import {useState} from 'react';
import SongDetail from './components/SongDetail';
import useFetch from './components/Hooks/useFetch';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import GlobalStyles from './theme/GlobalStyles';
import { AppContainer } from './styles';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const url = searchTerm
  ? `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(searchTerm)}`
  : null;
  const {data, isLoading, error, refetch} = useFetch(url); 
  const albums = data?.album ?? [];
  const results = albums.map((album) => ({
    id: album.idAlbum,
    title: album.strAlbum,
    album: album.strAlbum, 
    artist: album.strArtist,
    year: album.intYearReleased
  }));
   
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AppContainer>
      <Routes>
        <Route path="/biblioteca" element={<Library />} />
        <Route path = '/' element={<SearchResults results={results} onAdd onSearch={setSearchTerm} isLoading = {isLoading} error = {error} onRetry={refetch} searchTerm = {searchTerm}/>} />
        <Route path = '/song/:id' element={<SongDetail/>} />
      </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
