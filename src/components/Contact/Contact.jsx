import Grid from '@material-ui/core/Grid';

export default function Contact() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <p className="subtitle"> Contact </p>
            </Grid>
            <Grid item xs={6}>
                <p className="subtitle"> LinkedIn </p>
            </Grid>
            <Grid item xs={6}>
                <p className="subtitle"> Github </p>  
            </Grid>
        </Grid>
    )
};