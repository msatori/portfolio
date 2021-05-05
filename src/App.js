import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//page imports
import HomePage from './pages/Home';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
