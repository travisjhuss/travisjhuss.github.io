import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, ButtonGroup, ButtonProps, Drawer, IconButton, MenuItem, MenuList, styled, Typography, useMediaQuery } from '@mui/material';
import { blue, red, yellow } from '@mui/material/colors';
import React from 'react';

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

const Menu: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery('(min-width:700px)');
    const toggleDrawer = () => {
        setOpen(!open)
    };
    
    return (
        <>
        {isDesktop ?
            <Box className="flex justify-start align-center pe-[12px]">
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
                    <Box className="flex justify-end align-center mt-1">
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
                    <MenuList sx={{ mt: 5 }}>
                        <MenuItem autoFocus={true} onClick={() => window.location.href = "/resume"}>
                            <Typography color="success" variant="h6" align="center" sx={{ width: '100%', textShadow: '1px 1px 1px #636363' }}>
                                Resume
                            </Typography>
                        </MenuItem>
                        <MenuItem sx={{ mt: 3 }} onClick={() => window.location.href = "/projects"}>
                            <Typography color="secondary" variant="h6" align="center" sx={{ width: '100%', textShadow: '1px 1px 1px #636363' }}>
                                Projects
                            </Typography>
                        </MenuItem>
                        <MenuItem sx={{ mt: 3 }} onClick={() => window.location.href = "/contact"}>
                            <Typography color="primary" variant="h6" align="center" sx={{ width: '100%', textShadow: '1px 1px 1px #636363' }}>
                                Contact
                            </Typography>
                        </MenuItem>
                    </MenuList>
                </Drawer>
            </>
        )}
        </>
    );
};

export default Menu;