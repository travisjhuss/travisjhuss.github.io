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
                Accomplished leader with 15 years of experience in hospitality, 
                now thriving in software engineering. I bring a unique blend of 
                strong organizational, communication, and multitasking skills, 
                honed through years of leading teams and delivering high-quality results. 
                As a software developer, I approach challenges with curiosity, tenacity, 
                and a methodical, team-first mindset. My background as a chef and leader 
                has taught me the value of collaboration, discipline, and passion in achieving 
                the best outcomes—whether in the kitchen or in code.
              </p>
            </Grid>
            <Grid item xs={12}>
              <p className="subtitle skills-header">Skills</p>
              <p className="body-text" style={{ textAlign: 'center' }}>
                JavaScript | C# .NET | React | Redux | CSS | Node
              </p>
              <p className="body-text" style={{ textAlign: 'center' }}>
                Python | Scala | PostgreSQL | Playwright/Jest | Bootstrap
              </p>
            </Grid>
          </Grid>
        </div>
    )
}