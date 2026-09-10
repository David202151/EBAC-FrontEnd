import Header from './components/Header';
import Login from './components/Login';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <div className="App">
      <Header appName="Movie App"/>
      <MoviesList />
      <Login />
    </div>
  );
}

export default App;
