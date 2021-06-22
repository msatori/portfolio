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
import Contact from './pages/Contact'
//utilities
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/about">
            <Bio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>

    </main>
  );
}

export default App;
