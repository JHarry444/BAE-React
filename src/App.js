import trainers from './trainers.json';
import './App.css'; 
import Heading from './Heading';

function App() {
  
  const trainersAsHTML = trainers.map(trainer => {
    return (
      <div>
        <h3>{trainer.name}</h3>
        <p>Age: {trainer.age}</p>
        <p>JobTitle: {trainer.jobTitle}</p>
      </div>
    );
  });

  return (
    <div className="App">
      <Heading/>
      { trainersAsHTML }
    </div>
  );
}

export default App;
