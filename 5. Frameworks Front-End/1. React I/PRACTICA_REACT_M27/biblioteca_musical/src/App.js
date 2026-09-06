import React, { Component } from 'react';
import Header from './components/Header';
import Song from './components/Song';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('El componente App se monto correctamente.');
  }

  render() {
    return (
      <main>
        <Header />
        <Song title="My Love Mine All Mine" artist="Mitski" duration="2:17" />
        <Song title="Washing Machine Heart" artist="Mitski" duration="2:08" />
        <Song title="I Bet on Losing Dogs" artist="Mitski" duration="2:50" />
        <Song title="First Love/Late Spring" artist="Mitski" duration="4:38" />
        <Song title="Nobody" artist="Mitski" duration="3:13" />
      </main>
    );
  }
}

export default App;