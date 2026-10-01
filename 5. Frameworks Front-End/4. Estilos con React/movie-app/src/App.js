import { Route, Routes } from 'react-router-dom';
//import Header from './components/Header';
import Login from './components/Login';
import MoviesList from './components/MoviesList';
import './styles.scss';
import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import GlobalStyles from './theme/GlobalStyles';


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <div className="app">
        <Routes>
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
