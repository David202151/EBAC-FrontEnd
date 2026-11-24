import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Detail from "./pages/Detail";

function App() { 
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pokemon/:name" element={<Detail />}/>
      </Routes>
    </div>
  );
}

export default App;
