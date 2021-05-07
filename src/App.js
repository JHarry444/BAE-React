import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import TrainerContainer from './trainers/TrainerContainer'
import TrainerForm from './trainers/TrainerForm';
import IndividualTrainer from './trainers/IndividualTrainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        {' '}
        <Link to="/away">Away</Link>
        {' '}
        <Link to="/trainers/create">CREATE Trainers</Link>
        {' '}
        <Link to="/trainers/read">GET Trainers</Link>
        <br/>
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Route path="/away">
          <p>Away</p>
        </Route>
        <Route path="/trainers/create">
          <TrainerForm/>
        </Route>
        <Route exact path="/trainers/read">
          <TrainerContainer/>
        </Route>
        <Route path="/trainers/read/:id">
          <IndividualTrainer/>
        </Route>
        {new Date().toLocaleTimeString()}
      </Router>
      </div>
  );
}

export default App;
