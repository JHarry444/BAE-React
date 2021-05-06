import './App.css';
import TrainerContainer from './trainers/TrainerContainer';
import TrainerForm from './trainers/TrainerForm';

function App() {

  return (
    <div className="App">
      <TrainerForm/>
      <TrainerContainer/>
    </div>
  );
}

export default App;
