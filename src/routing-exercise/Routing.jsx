import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import Contact from './Contact';
import Notfound from './NotFound';

const Routing = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/users/:id">
                        <Users />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/contact" >
                        <Contact />
                    </Route>
                    <Route path="**">
                        <Notfound/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Routing;