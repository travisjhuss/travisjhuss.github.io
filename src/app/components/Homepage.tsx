'use client';
import Image from "next/image";
import { Box, Button, Typography, useMediaQuery } from '@mui/material';

export default function Home() {
    const isDesktop = useMediaQuery('(min-width:700px)');

    return (
        <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: isDesktop ? 'row' : 'column',
                alignItems: 'center',
                margin: isDesktop ? '120px auto' : '0',
                p: isDesktop ? '0 20px' : 0
            }}
        >
            <Box sx={{ mr: isDesktop ? 4 : 0 }}>
                <Image
                    src="/profilepic2.png"
                    alt="photo of Travis Huss"
                    width={isDesktop ? 350 : 325}
                    height={300}
                    style={{ 
                        borderRadius: isDesktop ? '10px' : '0',
                        border: '1px solid black'
                    }}
                />
            </Box>
            <Box sx={{ p: isDesktop ? 0 : '0 20px'}}>
                <Box sx={{ 
                    borderBottom: '1px solid black',
                    mt: isDesktop ? 0 : 2
                    }}
                >
                    <Typography
                        variant={isDesktop ? 'h4' : 'h5'}
                        align={isDesktop? 'left' : 'center'}
                        component="h4"
                    >
                        Greetings & salutations...
                    </Typography>
                </Box>
                <Typography variant="body1" align="left" component="p" sx={{ maxWidth: '500px', mt: '25px' }}>
                    Welcome to my digital realm. Here you’ll find fragments of projects, 
                    a glimpse into my professional journey, and pathways to connect. 
                    Dive in, let the lines of code speak, and if you feel the pull, reach out. 
                    The door is always open.
                </Typography>
                <Box 
                    sx={{
                        mt: isDesktop ? 5 : 3,
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        mb: isDesktop ? 0 : 2
                    }}
                >
                    <Button
                        variant="contained"
                        color="success"
                        href="/resume"
                        sx={{
                            p: '42px 20px',
                            borderRadius: '100%',
                            width: '125px'
                        }}
                    >
                        <Typography variant="h6" align="left" component="span">
                            Resume
                        </Typography>
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        href="/projects"
                        sx={{
                            color: "white",
                            p: '42px 9px',
                            borderRadius: '100%',
                            width: '125px'
                        }}
                    >
                        <Typography variant="h6" align="left" component="span">
                            Projects
                        </Typography>
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/contact"
                        sx={{
                            p: '42px 15px',
                            borderRadius: '100%',
                            width: '125px',
                        }}
                    >
                        <Typography variant="h6" align="left" component="span">
                            Contact
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
