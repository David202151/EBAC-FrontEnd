import { Route, Routes } from 'react-router-dom';
//import Header from './components/Header';
import Login from './components/Login';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
