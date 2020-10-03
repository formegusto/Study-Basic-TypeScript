import React from 'react';
import './App.css';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) : void => {
    console.log(`${name} Hello!`);
  }
  return (
    <Greetings name="TH" optional='옵션선택' onClick={onClick}/>
  );
}

export default App;
