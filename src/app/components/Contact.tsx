import { Box, List, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {

    return (
        <Box className="flex flex-col justify-center items-center p-0 mx-auto my-[25px] md:my-[75px] md:px-[20px]">
            <Typography variant="h5" align="left" component="h5" fontWeight={600}>
                Contact
            </Typography>
            <List sx={{ mt: 8 }}>
                <ListItem>
                    <ListItemButton component="a" href="https://www.linkedin.com/in/travisjhuss" target='_blank'>
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                            <LinkedInIcon color="primary" fontSize='large'/>
                        </ListItemIcon>
                        <Typography variant="h5" align="center" component="p">
                            LinkedIn
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component="a" href="https://github.com/travisjhuss" target='_blank'>
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                            <GitHubIcon color="secondary" fontSize='large'/>
                        </ListItemIcon>
                        <Typography variant="h5" align="center" component="p">
                            Github
                        </Typography>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton component="a" href="mailto:travisjhuss@gmail.com" target='_blank'>
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                            <EmailIcon color="success" fontSize='large'/>
                        </ListItemIcon>
                        <Typography variant="h5" align="center" component="p">
                            Email
                        </Typography>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
};
