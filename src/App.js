import trainersJSON from './trainers.json';
import './App.css'; 
import Heading from './Heading';
import Component from './Component';
import Trainer from './Trainer';

function App() {
  
  const trainers = trainersJSON.map(trainer => <Trainer name={trainer.name} age={trainer.age} jobTitle = {trainer.jobTitle}/>);

  return (
    <div className="App">
      {/* <Heading/> */}
      {/* { <Trainer name="JH" age={27} jobTitle="Weapon"/> } */}
      {trainers}
      <Trainer/>
      {/* <Component/> */}
    </div>
  );
}

export default App;
