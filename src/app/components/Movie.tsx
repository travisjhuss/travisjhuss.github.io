'use client';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

type MovieAppProps = {
    isDesktop: boolean;
};

const MovieApp: React.FC<MovieAppProps> = ({ isDesktop }) => {
    return (
        <Card sx={{ maxWidth: 1000, borderRadius: isDesktop ? '4px' : '0px', backgroundColor: '#fff' }}>
            <CardMedia
                sx={{
                    height: isDesktop ? 600 : 225,
                }}
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
