'use client';

import MenuIcon from '@mui/icons-material/Menu';
import CircleIcon from '@mui/icons-material/Circle';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import "../globals.css";
import { Box, Button, ButtonGroup, ButtonProps, Drawer, MenuItem, MenuList, styled } from '@mui/material';
import { blue, red, yellow } from '@mui/material/colors';

const ResumeButton = styled(Button)<ButtonProps>(() => ({
    color: '#000',
    fontWeight: 600,
    '&:hover': {
        backgroundColor: 'transparent',
        color: red['A700']
  },
}));

const ProjectButton = styled(Button)<ButtonProps>(() => ({
    color: '#000',
    fontWeight: 600,
    '&:hover': {
        backgroundColor: 'transparent',
        color: yellow[700]
  },
}));

const ContactButton = styled(Button)<ButtonProps>(() => ({
    color: '#000',
    fontWeight: 600,
    '&:hover': {
        backgroundColor: 'transparent',
        color: blue['A700']
  },
}));

const NavBar: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery('(min-width:700px)');
    const toggleDrawer = () => {
        setOpen(!open)
    }
    
    return (
        <AppBar position="static" color="transparent" sx={{ boxShadow: 0 }}>
            <Toolbar disableGutters={true} sx={{ justifyContent: 'center' }}>
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1100px',
                }}>
                    <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}>
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
                        <Typography 
                            variant={isDesktop ? 'h6' : 'body1'}
                            align="left"
                            component="div"
                            sx={{ 
                                flexGrow: 1,
                                ml: 1,
                                fontWeight: 600,
                            }}
                        >
                            Travis J. Huss
                        </Typography>
                        <Typography
                            variant={isDesktop ? 'h6' : 'body2'}
                            align="left"
                            component="div"
                            sx={{ flexGrow: 1, ml: 1 }}
                        >
                            Software Engineer
                        </Typography>
                    </Box>
                    {isDesktop ?
                            <Box sx={{ 
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                pr: '12px'
                            }}>
                                <ButtonGroup variant="text" color="inherit" aria-label="Basic button group">
                                    <ResumeButton variant="text" href="/resume">Resume</ResumeButton>
                                    <ProjectButton variant="text" href="/projects">Projects</ProjectButton>
                                    <ContactButton variant="text" href="/contact">Contact</ContactButton>
                                </ButtonGroup>
                            </Box>
                    : (
                        <>
                            <IconButton
                                onClick={() => toggleDrawer()}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="top"
                                open={open}
                                onClose={() => toggleDrawer()}
                                transitionDuration={500}
                                PaperProps={{
                                    style: {
                                      height: '100%',
                                      backgroundColor: '#ebdbd5'
                                    },
                                }}
                            >
                                <Box sx={{ 
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    mt: 1
                                }}>
                                    <IconButton
                                        onClick={() => toggleDrawer()}
                                        size="large"
                                        edge="end"
                                        color="inherit"
                                        aria-label="close menu"
                                        sx={{ mr: 1 }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                                <MenuList sx={{ mt: 5}}>
                                    <MenuItem autoFocus={true} onClick={() => window.location.href="/resume"}>
                                        <Typography color="success" variant="h6" align="center" sx={{ width: '100%', textShadow: '1px 1px 1px #636363' }}>
                                            Resume
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem sx={{ mt: 3}} onClick={() => window.location.href="/projects"}>
                                        <Typography color="secondary" variant="h6" align="center" sx={{ width: '100%', textShadow: '1px 1px 1px #636363' }}>
                                            Projects
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem sx={{ mt: 3}} onClick={() => window.location.href="/contact"}>
                                        <Typography color="primary" variant="h6" align="center" sx={{ width: '100%', textShadow: '1px 1px 1px #636363' }}>
                                            Contact
                                        </Typography>
                                    </MenuItem>
                                </MenuList>
                            </Drawer>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
