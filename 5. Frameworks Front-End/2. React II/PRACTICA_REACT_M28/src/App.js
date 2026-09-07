import Header from './components/Header';
import Login from './components/Login';
import MoviesList from './components/MusicList';

function App() {
  return (
    <div className="App">
      <Header appName="Biblioteca Musical"/>
      <MoviesList />
      <Login />
    </div>
  );
}

export default App;