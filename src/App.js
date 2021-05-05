import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//page imports
import HomePage from './pages/Home';
import Bio from './pages/Bio';
import Resume from './pages/Resume';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/about">
            <Bio />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>

      <Bio />
    </main>
  );
}

export default App;
