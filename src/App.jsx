import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import TrainerContainer from './trainers/TrainerContainer';
import TrainerForm from './trainers/TrainerForm';
import IndividualTrainer from './trainers/IndividualTrainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav fill variant="tabs">
          {/* routing Links with Bootstrap styling */}
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/away" className="nav-link">Away</Link>
          <Link to="/trainers/create" className="nav-link">CREATE Trainers</Link>
          <Link to="/trainers/read" className="nav-link">GET Trainers</Link>
        </Nav>

        <br />
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Route path="/away">
          <p>Away</p>
        </Route>
        <Route path="/trainers/create">
          <TrainerForm />
        </Route>
        <Route exact path="/trainers/read">
          <TrainerContainer />
        </Route>
        <Route path="/trainers/read/:id">
          <IndividualTrainer />
        </Route>
      </Router>
    </div>
  );
}

export default App;
