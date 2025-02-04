import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';


const MovieApp: React.FC = () => {
    return (
        <Card className="md:rounded-sm" sx={{ maxWidth: 1000, backgroundColor: '#fff' }}>
            <CardMedia
                className="h-[225px] md:h-[600px]"
                image="/movie-screen-2.png"
                title="movie app screenshot"
                component="img"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="h6">
                    The Travis Movie Database (TMDb)
                </Typography>
                <Typography variant="subtitle1">
                    Duration: 48 Hour Sprint
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                    TMDb is a simple movie organization app built using React, Redux, and
                    Material UI. Users can upload movie posters with details about the
                    movie. Their library of movies is displayed with their respective
                    posters that can be clicked on to view more details. Users can also use
                    a search function to easily find what they are looking for.
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    href="https://github.com/travisjhuss/movie-collection"
                    target="_blank"
                    aria-label="github link"
                >
                    Github
                </Button>
            </CardActions>
        </Card>
    )
};

export default MovieApp;
