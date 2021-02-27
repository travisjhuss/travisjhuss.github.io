import { HashRouter as Router, Route, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />

      <About />

      <Skills />

      <Work />

      <Contact />

    </div>
  );
}

export default App;
