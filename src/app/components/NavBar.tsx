'use client';

import CircleIcon from '@mui/icons-material/Circle';
import * as React from 'react';
import "../globals.css";
import { Box, AppBar, Toolbar, IconButton } from '@mui/material';
import { yellow } from '@mui/material/colors';
import dynamic from 'next/dynamic';

export const Menu = dynamic(() => import('./Menu'), { ssr: false })

const NavBar: React.FC = () => {
    
    return (
        <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
            <Toolbar disableGutters={true} sx={{ justifyContent: 'center' }}>
                <Box className="flex justify-between items-center max-w-6xl w-full">
                    <Box className="flex justify-start items-center">
                        <IconButton
                            href="/"
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="back to home page"
                            sx={{
                                
                            }}
                        >
                            <CircleIcon fontSize="large" sx={{ color: yellow[700] }}/>
                        </IconButton>
                        <h1 
                            className="font-bold pl-[8px] text-left text-base md:text-xl"
                        >
                            Travis J. Huss
                        </h1>
                        <h2
                            className="text-left pl-[8px] text-base md:text-xl"
                        >
                            Software Engineer
                        </h2>
                    </Box>
                    <Menu />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
