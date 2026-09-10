import Header from './components/Header';
import Library from './components/Library';
import SearchResults from './components/SearchResults';

import {useState, useEffect} from 'react';

const songs = [
    { id: 1, title: "My Love Mine All Mine", artist: "Mitski", duration: "2:17", year: 2023 },
    { id: 2, title: "Washing Machine Heart", artist: "Mitski", duration: "2:08", year: 2018 },
    { id: 3, title: "I Bet on Losing Dogs", artist: "Mitski", duration: "2:50", year: 2016 },
    { id: 4, title: "First Love/Late Spring", artist: "Mitski", duration: "4:38", year: 2012 },
    { id: 5, title: "Nobody", artist: "Mitski", duration: "3:13", year: 2018 },
    { id: 6, title: "Francis Forever", artist: "Mitski", duration: "2:30", year: 2014 },
    { id: 7, title: "Your Best American Girl", artist: "Mitski", duration: "3:32", year: 2016 },
    { id: 8, title: "Love Me More", artist: "Mitski", duration: "3:33", year: 2022 },
    { id: 9, title: "The Only Heartbreaker", artist: "Mitski", duration: "3:02", year: 2022 },
    { id: 10, title: "Me and My Husband", artist: "Mitski", duration: "2:17", year: 2018 },
    { id: 11, title: "Townie", artist: "Mitski", duration: "3:24", year: 2014 },
    { id: 12, title: "A Pearl", artist: "Mitski", duration: "2:42", year: 2018 },
    { id: 13, title: "Fireworks", artist: "Mitski", duration: "2:41", year: 2016 },
    { id: 14, title: "Liquid Smooth", artist: "Mitski", duration: "3:01", year: 2012 },
    { id: 15, title: "Happy", artist: "Mitski", duration: "3:40", year: 2016 },
    { id: 16, title: "Pink in the Night", artist: "Mitski", duration: "2:15", year: 2018 },
    { id: 17, title: "Geyser", artist: "Mitski", duration: "2:23", year: 2018 },
    { id: 18, title: "Working for the Knife", artist: "Mitski", duration: "2:38", year: 2021 },
    { id: 19, title: "Should've Been Me", artist: "Mitski", duration: "3:14", year: 2022 },
    { id: 20, title: "Bug Like an Angel", artist: "Mitski", duration: "3:34", year: 2023 }
];

function App() {

  const [searchResults] = useState(songs);
  const [librarySongs, setLibrarySongs] = useState([]);

  const addToLibrary = (song) =>{
    setLibrarySongs(prevLibrarySongs => [...prevLibrarySongs, song]);
  }; 
  useEffect(() => {
      console.log('La biblioteca se actualizo:', librarySongs);
  }, [librarySongs]);
  return (
    <div className="App">
      <Header appName="Biblioteca Musical"/>
      <SearchResults results={searchResults} onAdd={addToLibrary} />
      <Library results={librarySongs} />
    </div>
  );
}

export default App;