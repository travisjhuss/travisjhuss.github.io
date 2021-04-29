import { useState, useEffect } from 'react';
// MUI
import { Grid, useMediaQuery } from '@material-ui/core';
// Component Imports
import WorkMobile from '../Work/WorkMobile';
import WorkDesktop from '../Work/WorkDesktop';
import Contact from '../Contact/Contact';
import Top from '../Top/Top';
import About from '../About/About';
import NavArrow from '../NavArrow/NavArrow';
import HeaderLinks from '../HeaderLinks/HeaderLinks';
// Animation
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
// Styling
import './App.css';

function App() {
  const mobile = useMediaQuery('(max-width:700px)');
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowName, setShouldShowName] = useState(false);
  const [shouldShowTitle, setShouldShowTitle] = useState(false);
  const [shouldHideArrow, setShouldHideArrow] = useState(false);

  useEffect(() => {
    function handleScrollName() {
      const yPos = window.scrollY;
      const isPastName = yPos > 140;

      setShouldShowName(isPastName);
      setLastYPos(yPos);
    }

    function handleScrollTitle() {
      const yPos = window.scrollY;
      const isPastTitle = yPos > 663;

      setShouldShowTitle(isPastTitle);
      setLastYPos(yPos);
    }

    function handleScrollArrow() {
      const yPos = window.scrollY;
      const isAtBottom = yPos > 2500;

      setShouldHideArrow(isAtBottom);
      setLastYPos(yPos);
    }

    window.addEventListener('scroll', handleScrollName, false);
    window.addEventListener('scroll', handleScrollTitle, false);
    window.addEventListener('scroll', handleScrollArrow, false);
  }, [lastYPos]);

  const openLink = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="App">
      <div className="header">
        <div className="header-left">
          <motion.div
            className="header-name"
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldShowName ? 1 : 0 }}
            transition={{ opacity: { duration: 0.3 } }}
          >
            <Link
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              Travis J. Huss
            </Link>
          </motion.div>
          <motion.div
            className="header-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: shouldShowTitle ? 1 : 0 }}
            transition={{ opacity: { duration: 0.3 } }}
          >
            <Link
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              Full Stack Software Engineer
            </Link>
          </motion.div>
        </div>

        <HeaderLinks />
      </div>

      <motion.div
        className="scroll-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: !shouldHideArrow ? 1 : 0 }}
        transition={{ opacity: { duration: 0.3 } }}
      >
        <NavArrow />
      </motion.div>

      <Top mobile={mobile} />

      <div className="container" id="about">
        <About />
      </div>

      <div className="container" id="work" data-aos="fade-up">
        <div className="content">
          <Grid container spacing={4}>
            <Grid item xs={0} sm={6}></Grid>
            <Grid item xs={12} sm={6}>
              <p className="subtitle"> Work </p>
            </Grid>
            {mobile ? (
              <WorkMobile openLink={openLink} />
            ) : (
              <WorkDesktop openLink={openLink} />
            )}
          </Grid>
        </div>
      </div>

      <div className="container2" id="contact" data-aos="fade-right">
        <Contact openLink={openLink} />
      </div>
    </div>
  );
}

export default App;
