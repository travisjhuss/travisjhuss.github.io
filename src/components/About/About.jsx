import { Grid } from '@material-ui/core';

export default function About() {
    return(
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
    )
}