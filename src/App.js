import { useState } from 'react';
import './App.css'; 
import Container from './lifting-state/Container';
import Shopping from './shopping/Shopping';
import TrainerContainer from './trainers/TrainerContainer';

function App() {

  return (
    <div className="App">
      <TrainerContainer/>
      {/* <Container/> */}
    </div>
  );
}

export default App;
