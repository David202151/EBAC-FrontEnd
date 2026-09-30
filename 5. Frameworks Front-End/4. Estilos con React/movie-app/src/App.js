import { Route, Routes } from 'react-router-dom';
//import Header from './components/Header';
import Login from './components/Login';
import MoviesList from './components/MoviesList';
import './App.css'; // Estilos globales + variables de color

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
