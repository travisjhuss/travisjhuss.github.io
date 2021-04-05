import { Link, animateScroll as scroll } from 'react-scroll';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Grid from '@material-ui/core/Grid';
import './App.css';

function App() {
  const openLinkedIn = () => {
    const newWindow = window.open(
      'https://www.linkedin.com/in/travisjhuss/',
      '_blank',
      'noopener,noreferrer'
    );
    if (newWindow) newWindow.opener = null;
  };

  const openGithub = () => {
    const newWindow = window.open(
      'https://github.com/travisjhuss',
      '_blank',
      'noopener,noreferrer'
    );
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
        {/* <img
          src=""
          width="530"
          alt="mill city museum photo in black and white"
          class="cover-photo"
        /> */}
        <img
          src="./mill-city-museum.png"
          width="530"
          alt="mill city museum photo in black and white"
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
                src="./BandWprofile.jpeg"
                alt="profile"
              />
            </Grid>
            <Grid item xs={4}>
              <p className="subtitle">About</p>
            </Grid>
            <Grid item xs={5} style={{ marginTop: '50px' }}>
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
              <p className="subtitle" style={{ marginTop: '0px' }}>
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
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <p className="body-text">
                This is my work ndjdsnfjksdncskdncks jsdncjksdncs
                jdnckjsndcksdnc dncjsdc cdsh fdjc ohf sdfh sdfh sdifh ldfhs
                fsdifh sifhs dif hsdfsf sid hfp
              </p>
            </Grid>
            <Grid item xs={2}>
              <p className="subtitle"> | </p>
            </Grid>
            <Grid item xs={4}>
              <p className="subtitle"> Work </p>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="container" id="contact" data-aos="fade-right">
        <div className="content">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <p className="subtitle"> Contact </p>
            </Grid>
            <Grid item xs={6}>
              <img
                alt="linkedin logo"
                src="./LI-In-Bug.png"
                width="120px"
                onClick={openLinkedIn}
              />
              <p className="subtitle"> LinkedIn </p>
            </Grid>
            <Grid item xs={6}>
              <img
                alt="github logo"
                src="./GitHub-Mark-120px-plus.png"
                onClick={openGithub}
              />
              <p className="subtitle"> Github </p>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default App;
