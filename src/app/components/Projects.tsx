'use client';
import { Box, Typography, useMediaQuery } from '@mui/material';
import ChefApp from './ChefApp';
import Bekome from './Bekome';
import MovieApp from './Movie';

export default function Home() {
    const isDesktop = useMediaQuery('(min-width:700px)');

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'column',
            margin: isDesktop ? '25px auto' : '0',
            p: isDesktop ? '0 20px' : 0,
            flexWrap: "wrap"
        }}
        >
            <Typography
                variant="caption"
                align='right'
                sx={{
                    mb: 1,
                    mr: isDesktop ? 1 : 2,
                }}
            >
                Scroll for more
            </Typography>
            <Bekome isDesktop={isDesktop} />
            <Box sx={{ mt: 3 }} />
            <ChefApp isDesktop={isDesktop} />
            <Box sx={{ mt: 3 }} />
            <MovieApp isDesktop={isDesktop} />
        </Box>
    )
};
