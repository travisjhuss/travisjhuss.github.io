import { Box, Button, Typography } from '@mui/material';

export default function Home() {
    return (
        <Box 
            className="flex justify-center items-center flex-col m-0 p-0 md:my-[120px] md:mx-auto md:flex-row md:px-5"
        >
            <Box className="w-[325px] md:w-[350px] md:w-sm m-0 md:me-[32px]">
                <img
                    src="/profilepic2.png"
                    alt="photo of Travis Huss"
                    className="w-fit md:rounded-lg md:border md:border-solid md:border-black"
                />
            </Box>
            <Box className="px-[20px] md:p-0">
                <Box className="border-b border-solid border-black mt-[20px] md:mt-0"
                >
                    <Typography
                        className="text-center w-full md:text-left"
                        variant="h5"
                        component="h5"
                        fontWeight={600}
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
                <Box className="flex flex-row flex-wrap justify-around items-center mt-[20px] mb-[20px] md:mt-[40px] md:mb-0">
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
