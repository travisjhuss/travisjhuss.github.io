'use client';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

type ChefAppProps = {
    isDesktop: boolean;
};

const ChefApp: React.FC<ChefAppProps> = ({ isDesktop }) => {
    return (
        <Card sx={{ maxWidth: 1000, borderRadius: isDesktop ? '4px' : '0px', backgroundColor: '#fff' }}>
            <CardMedia
                sx={{
                    height: isDesktop ? 550 : 200,
                }}
                image="/chef-screen.png"
                title="chef app screenshot"
                component="img"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="h6">
                    The Condescending Chef
                </Typography>
                <Typography variant="subtitle1">
                    Duration: 2 Week Sprint with 1 Week Scoping
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                    Most of us rely on the internet as a way to get recipes. Many of us just
                    want a simple recipe and end up spending half an hour looking through
                    food blog after food blog only to settle on a recipe that fails to
                    deliver in the end.
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                    Thats where my idea for an app came from. An app built for professional
                    chefs to give feedback to everyday home cooks on recipes they find
                    online, or even their own personal recipes. The app is built with React,
                    Redux, Node, Express, PostgreSQL, and Material UI.
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    href="https://github.com/travisjhuss/the-condescending-chef"
                    target="_blank"
                    aria-label="github link"
                >
                    Github
                </Button>
            </CardActions>
        </Card>
    )
};

export default ChefApp;
