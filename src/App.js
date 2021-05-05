import { useState } from 'react';
import './App.css'; 
import Container from './lifting-state/Container';
import TrainerContainer from './trainers/TrainerContainer';

function App() {
    
  const [val, setVal] = useState("bloop");

  const handleChange = e => {
    setVal(bloop => {
      console.log(bloop);
      return bloop + e.target.value;
    });
  }

  return (
    <div className="App">
      <TrainerContainer/>
      {/* <Container/> */}
      <p>VAl: {val}</p>
      <input onChange={handleChange}/>
    </div>
  );
}

export default App;
