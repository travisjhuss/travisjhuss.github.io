import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';


const Bekome: React.FC = () => {
    return (
        <Card className="md:rounded-sm" sx={{ maxWidth: 1000, backgroundColor: '#fff' }}>
            <CardMedia
                className="h-[225px] md:h-[600px]"
                image="/explore-view.png"
                title="bekome app screenshot"
                component="img"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="h6">
                    bekome
                </Typography>
                <Typography variant="subtitle1">
                    Duration: 2 Week Sprint with 1 Week Scoping
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                    Built as part of a client group project at Prime Digital Academy. Our
                    clients wanted to address the difficulties of finding a therapist by
                    creating an app similar to a dating app, such as Hinge. Clients and
                    providers respectively set up their profiles with personal info,
                    preferences, profile picture, and more. Then clients are able to browse
                    and filter through providers and communicate with the ones who seem like
                    a good fit.
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                    The app is built with React, Redux, Node, Express, PostgreSQL, Material
                    UI, Socket.io, and Swiper. I personally worked on the backend code that
                    handles the completed forms as well as styling on the front end.
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    href="https://github.com/travisjhuss/bekome-prime-group-project"
                    target="_blank"
                    aria-label="github link"
                >
                    Github
                </Button>
            </CardActions>
        </Card>
    )
};

export default Bekome;
