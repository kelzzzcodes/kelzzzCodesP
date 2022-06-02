import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Landingpage from './Pages/Landingpage'
import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{height:'5em'}}>
      
      </div>
      <Landingpage />
      <Main />
    </div>
  );
}

export default App;
