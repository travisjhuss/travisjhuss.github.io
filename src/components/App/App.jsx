import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Bekome from '../Work/Bekome';
import Chef from '../Work/Chef';
import Todo from '../Work/Todo';
import Gallery from '../Work/Gallery';
import Movie from '../Work/Movie';
import Details from '../Work/Details';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  contactLinks: {
    marginTop: '70px',
    textAlign: 'left',
    paddingLeft: '80px',
  },
}));

function App() {
  const classes = useStyles();
  const [hover, setHover] = useState(0);

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
        <Link
          className="link"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          // offset={}
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
          // offset={}
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
          // offset={}
          duration={500}
        >
          Contact
        </Link>
      </div>

      <div className="scroll-note">
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
      </div>

      <div className="top">
        <img
          src="./mill-city-museum.png"
          width="530"
          alt="mill city museum in black and white"
          class="cover-photo"
        />
        <div className="name">TRAVIS J HUSS</div>
        <div className="job-title">Full Stack Software Engineer</div>
      </div>

      <div className="container" id="about">
        <div className="content">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <img
                className="profile-img"
                src="./Profile-pic-close.png"
                alt="profile"
              />
            </Grid>
            <Grid item xs={4}>
              <p className="subtitle">About</p>
            </Grid>
            <Grid item xs={5} style={{ marginTop: '150px' }}>
              <p className="body-text">
                Accomplished leader in the hospitality industry now bringing the
                skills cultivated over the past 15 years to a career in software
                engineering. Strong organizational and communication skills, the
                ability to multitask, and demonstrated success in building
                positive working relationships at all levels. The best products
                are created by those with passion for the work they do.
              </p>
            </Grid>
            <Grid item xs={12}>
              <p
                className="subtitle"
                style={{ marginTop: '-20px', marginBottom: '0px' }}
              >
                Skills
              </p>
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
            <Grid item xs={6}>
              {hover === 0 && <Details />}
              {hover === 1 && <Bekome />}
              {hover === 2 && <Movie />}
              {hover === 3 && <Chef />}
              {hover === 4 && <Gallery />}
              {hover === 5 && <Todo />}
            </Grid>
            <Grid item xs={6}>
              <p className="subtitle"> Work </p>
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
                      openLink('https://github.com/travisjhuss/to-do-list-app')
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
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="container" id="contact" data-aos="fade-right">
        <div className="content">
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <p className="subtitle"> Contact </p>
            </Grid>
            <Grid item xs={7} className={classes.contactLinks}>
              <div
                className="link"
                onClick={() =>
                  openLink('https://www.linkedin.com/in/travisjhuss')
                }
              >
                <img alt="linkedin logo" src="./LI-In-Bug.png" width="80px" />
                <span className="contact-link"> LinkedIn </span>
              </div>
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={7} className={classes.contactLinks}>
              <div
                className="link"
                onClick={() => openLink('https://github.com/travisjhuss')}
              >
                <img
                  alt="github logo"
                  src="./GitHub-Mark-120px-plus.png"
                  width="80px"
                />
                <span className="contact-link"> Github </span>
              </div>
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={7} className={classes.contactLinks}>
              <div
                className="link"
                onClick={() => openLink('/resume2021.pdf')}
              >
                <img
                  alt="resume icon"
                  src="./resume.png"
                  width="80px"
                />
                <span className="contact-link"> Resume </span>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;
