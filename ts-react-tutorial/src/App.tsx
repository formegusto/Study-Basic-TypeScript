import React from 'react';
import './App.css';
import MyForm from './MyForm';

function App() {
  const onSubmit = (form: { name: string; description: string }) : void => {
    console.log(form);
  };
  return (
    <MyForm onSubmit={onSubmit} />
  );
}

export default App;