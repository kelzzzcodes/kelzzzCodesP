import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import main from './components/main';


function App() {
  return (
    <div className="App">
      <Header />
      <main />
    </div>
  );
}

export default App;
