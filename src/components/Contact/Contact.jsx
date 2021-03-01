import Grid from '@material-ui/core/Grid';

export default function Contact() {
    return (
        <div className="container" id="contact">
            <div className="content">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p className="subtitle"> Contact </p>
                    </Grid>
                    <Grid item xs={6}>
                        <img alt="linkedin logo" src="./LI-In-Bug.png" width="120px" />
                        <p className="subtitle"> LinkedIn </p>
                    </Grid>
                    <Grid item xs={6}>
                        <img alt="github logo" src="./GitHub-Mark-120px-plus.png" />
                        <p className="subtitle"> Github </p>
                    </Grid>
                </Grid>
            </div>
        </div >
    )
};