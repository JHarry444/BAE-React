import trainersJSON from './trainers.json';
import './App.css'; 
import Heading from './Heading';
import Component from './Component';
import Trainer from './Trainer';
import TrainerForm from './TrainerForm';

function App() {
  
  const trainers = trainersJSON.map(trainer => {
    return (
            <Trainer 
              name={trainer.name} 
              age={trainer.age} 
              jobTitle = {trainer.jobTitle}
            />
          );
  });
  
  return (
    <div className="App">
      <TrainerForm/>
      {/* <Heading/> */}
      {/* { <Trainer name="JH" age={27} jobTitle="Weapon"/> } */}
      {/* {trainers}
      <Trainer/>
      <Trainer name="sav" age={22} jobTitle="trainer"/> */}
      {/* <Component/> */}
    </div>
  );
}

export default App;
