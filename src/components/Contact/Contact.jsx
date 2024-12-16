import { Grid } from '@material-ui/core';
// custom hook
import useStyles from '../hooks/useStyles';

export default function Contact ({openLink}) {
    const classes = useStyles();

    return (
        <div className="content">
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <p className="subtitle"> Contact </p>
            </Grid>
            <Grid item xs={7} className={classes.contactLinksTop}>
              <div
                className="link"
                onClick={() =>
                  openLink('https://www.linkedin.com/in/travisjhuss')
                }
              >
                <img
                  alt="linkedin logo"
                  src="./LI-In-Bug.png"
                  className="contact-img"
                />
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
                  className="contact-img"
                />
                <span className="contact-link"> Github </span>
              </div>
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={7} className={classes.contactLinks}>
              <div className="link" onClick={() => openLink('/TravisHussResume24.pdf')}>
                <img
                  alt="resume icon"
                  src="./resume.png"
                  className="contact-img"
                />
                <span className="contact-link"> Resume </span>
              </div>
            </Grid>
          </Grid>
        </div>
    )
};