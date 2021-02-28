import { HashRouter as Router, Route, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Top from '../Top/Top';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import './App.css';
// MUI
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const font = "'Josefin Sans', sans-serif;"
// custom mui theme
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
  },
  palette: {
    primary: {
      main: '#0d0d0d'
    },
    secondary: {
      main: '#e6e6e6'
    }
  },
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />

        <Top />

        <About />

        <Skills />

        <Work />

        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
