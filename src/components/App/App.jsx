import { useState, useEffect } from 'react';
// MUI
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Grid, GridList, GridListTile, useMediaQuery } from '@material-ui/core';
// Component Imports
import Bekome from '../Work/Bekome';
import Chef from '../Work/Chef';
import Todo from '../Work/Todo';
import Gallery from '../Work/Gallery';
import Movie from '../Work/Movie';
import Details from '../Work/Details';
import WorkMobile from '../Work/WorkMobile';
import Contact from '../Contact/Contact';
// Animation
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
// Styling
import './App.css';
import useStyles from '../hooks/useStyles';

function App() {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:700px)');
  const [hover, setHover] = useState(0);
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

  const onHover = (key) => {
    setHover(key);
  };

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
        <div className="header-nav">
          <Link
            className="link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
          <Link
            className="link"
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            duration={500}
          >
            Work
          </Link>
          <Link
            className="link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>

      <motion.div
        className="scroll-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: !shouldHideArrow ? 1 : 0 }}
        transition={{ opacity: { duration: 0.3 } }}
      >
        <ArrowRightAltIcon
          style={{
            fontSize: '60px',
            color: '#33312F',
            transform: 'rotate(90deg)',
          }}
        />
        <div className="scroll-text">
          <p className="scroll-word">Scroll</p>
          <p className="scroll-word">For</p>
          <p className="scroll-word">More</p>
        </div>
      </motion.div>

      <div className="top">
        <div className="name">TRAVIS J HUSS</div>
        <div className="job-title">Full Stack Software Engineer</div>
        <img
          src="./mill-city-museum.png"
          // width="530"
          alt="mill city museum in black and white"
          className="cover-photo"
        />
        {mobile && (
          <div className="scroll-text-mobile">
            <p className="scroll-word">Scroll</p>
            <p className="scroll-word">For</p>
            <p className="scroll-word">More</p>
          </div>
        )}
      </div>

      <div className="container" id="about">
        <div className="content">
          <Grid container spacing={2}>
            <Grid item sm={3} xs={6}>
              <img
                className="profile-img"
                src="./Profile-pic-close.png"
                alt="head shot of Travis Huss"
              />
            </Grid>
            <Grid item sm={4} xs={6}>
              <p className="subtitle">About</p>
            </Grid>
            <Grid item sm={5} xs={12}>
              <p className="body-text about-text">
                Accomplished leader in the hospitality industry now bringing the
                skills cultivated over the past 15 years to a career in software
                engineering. Strong organizational and communication skills, the
                ability to multitask, and demonstrated success in building
                positive working relationships at all levels. The best products
                are created by those with passion for the work they do.
              </p>
            </Grid>
            <Grid item xs={12}>
              <p className="subtitle skills-header">Skills</p>
              <p className="body-text" style={{ textAlign: 'center' }}>
                JavaScript | CSS | React | Redux | Express | Node
              </p>
              <p className="body-text" style={{ textAlign: 'center' }}>
                Python | Flask | Postgresql | JQuery | Bootstrap
              </p>
            </Grid>
          </Grid>
        </div>
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
              <>
                <Grid item xs={6}>
                  {hover === 0 && <Details />}
                  {hover === 1 && <Bekome />}
                  {hover === 2 && <Movie />}
                  {hover === 3 && <Chef />}
                  {hover === 4 && <Gallery />}
                  {hover === 5 && <Todo />}
                </Grid>
                <Grid item xs={6}>
                  {/* <p className="subtitle"> Work </p> */}
                  <center>
                    <GridList
                      cellHeight={75}
                      className={classes.gridList}
                      cols={6}
                      rows={6}
                    >
                      <GridListTile
                        key="1"
                        cols={4}
                        rows={2}
                        onMouseEnter={() => onHover(1)}
                        onMouseLeave={() => onHover(0)}
                        onClick={() =>
                          openLink(
                            'https://github.com/travisjhuss/bekome-prime-group-project'
                          )
                        }
                      >
                        <img
                          src="./explore-view2.png"
                          alt="screen cap from bekome app"
                          className="work-img"
                        />
                      </GridListTile>
                      <GridListTile
                        key="2"
                        cols={2}
                        rows={2}
                        onMouseEnter={() => onHover(2)}
                        onMouseLeave={() => onHover(0)}
                        onClick={() =>
                          openLink(
                            'https://github.com/travisjhuss/movie-collection'
                          )
                        }
                      >
                        <img
                          src="./movie-screen-2.png"
                          alt="screen cap from movie database app"
                          className="work-img"
                        />
                      </GridListTile>
                      <GridListTile
                        key="3"
                        cols={6}
                        rows={2}
                        onMouseEnter={() => onHover(3)}
                        onMouseLeave={() => onHover(0)}
                        onClick={() =>
                          openLink(
                            'https://github.com/travisjhuss/the-condescending-chef'
                          )
                        }
                      >
                        <img
                          src="./chef-screen2.png"
                          alt="screen cap from condescending chef app"
                          className="work-img"
                        />
                      </GridListTile>
                      <GridListTile
                        key="4"
                        cols={2}
                        rows={2}
                        onMouseEnter={() => onHover(4)}
                        onMouseLeave={() => onHover(0)}
                        onClick={() =>
                          openLink(
                            'https://github.com/travisjhuss/photo-gallery-with-react'
                          )
                        }
                      >
                        <img
                          src="./gallery-screen.png"
                          alt="screen cap from photo gallery app"
                          className="work-img"
                        />
                      </GridListTile>
                      <GridListTile
                        key="5"
                        cols={4}
                        rows={2}
                        onMouseEnter={() => onHover(5)}
                        onMouseLeave={() => onHover(0)}
                        onClick={() =>
                          openLink(
                            'https://github.com/travisjhuss/to-do-list-app'
                          )
                        }
                      >
                        <img
                          src="./to-do-screen.png"
                          alt="screen cap from to do list app"
                          className="work-img"
                        />
                      </GridListTile>
                    </GridList>
                  </center>
                </Grid>{' '}
              </>
            )}
          </Grid>
        </div>
      </div>

      <div className="container2" id="contact" data-aos="fade-right">
        <Contact openLink={openLink}/>
      </div>
    </div>
  );
}

export default App;
