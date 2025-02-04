import { Box, Typography } from '@mui/material';
import ChefApp from './ChefApp';
import Bekome from './Bekome';
import MovieApp from './Movie';

export default function Home() {
    return (
        <Box className="flex justify-center content-center flex-col flex-wrap md:my-[25px] md:mx-auto md:px-[20px]">
            <Typography
                variant="caption"
                align='right'
                className="pe-[16px] pb-[8px] md:pe-[8px]">
                Scroll for more
            </Typography>
            <Bekome />
            <Box sx={{ mt: 3 }} />
            <ChefApp />
            <Box sx={{ mt: 3 }} />
            <MovieApp />
        </Box>
    )
};
