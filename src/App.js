import './App.css';

//page imports
import HomePage from './pages/Home';
import Bio from './pages/Bio';
import Resume from './pages/Resume';
import Contact from './pages/Contact'

import Header from './Components/Header';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main>

      <HomePage />

      <Bio />

      <Resume />

      <Contact />
     
    </main>
  );
}

export default App;
