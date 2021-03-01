import Grid from '@material-ui/core/Grid';

export default function Contact() {

    const openLinkedIn = () => {
        const newWindow = window.open('https://www.linkedin.com/in/travisjhuss/', '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const openGithub = () => {
        const newWindow = window.open('https://github.com/travisjhuss', '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className="container" id="contact" data-aos="fade-right">
            <div className="content">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p className="subtitle"> Contact </p>
                    </Grid>
                    <Grid item xs={6}>
                        <img alt="linkedin logo" src="./LI-In-Bug.png" width="120px" onClick={openLinkedIn}/>
                        <p className="subtitle"> LinkedIn </p>
                    </Grid>
                    <Grid item xs={6}>
                        <img alt="github logo" src="./GitHub-Mark-120px-plus.png" onClick={openGithub}/>
                        <p className="subtitle"> Github </p>
                    </Grid>
                </Grid>
            </div>
        </div >
    )
};