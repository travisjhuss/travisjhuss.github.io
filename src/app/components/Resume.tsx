'use client';
import CircleIcon from '@mui/icons-material/Circle';
import { Box, List, ListItem, ListItemIcon, Typography, useMediaQuery } from '@mui/material';

export default function Home() {
    const isDesktop = useMediaQuery('(min-width:700px)');

    return (
        <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: isDesktop ? 'row' : 'column',
                alignItems: 'center',
                margin: isDesktop ? '75px auto' : '0',
                p: isDesktop ? '0 20px' : 0
            }}
        >
            <Box sx={{ p: isDesktop ? 0 : '0 20px',  maxWidth: '800px' }}>
                <Box sx={{ 
                    borderBottom: '1px solid black',
                    mt: isDesktop ? 0 : 2
                    }}
                >
                    <Typography
                        variant={isDesktop ? 'h4' : 'h5'}
                        align="left"
                        component="h4"
                    >
                        Resume
                    </Typography>
                </Box>
                <Typography variant="body1" align="left" component="p" sx={{ maxWidth: '800px', mt: '25px' }}>
                    Curious, tenacious, and resourceful former chef turned Software Engineer with a 
                    Full Stack Software Engineering Certification and experience in developing user-centric applications. 
                    Proven track record of optimizing features to improve efficiency and drive results, with a focus on 
                    collaboration and problem-solving in fast-paced environments. Proficient in Typescript, React, C#, and 
                    design systems, with a passion for translating user needs into effective and scalable solutions.
                </Typography>
                <Box sx={{ 
                    borderBottom: '1px solid black',
                    mt: 3
                    }}
                >
                    <Typography
                        variant={isDesktop ? 'h5' : 'h6'}
                        align="right"
                        component="h4"
                    >
                        Skills, Language, Frameworks
                    </Typography>
                </Box>
                <Typography variant="body1" align="left" component="p" sx={{ maxWidth: '800px', mt: '25px' }}>
                    React | Typescript | Next.js | C# | .Net | Javascript | Python | Scala | CSS | Node | Express | SQL | 
                    Gitlab/Github | CI/CD | Docker | Redux | Jest | Enzyme | Playwright | Cypress | Storybook | Grafana | HTML5
                </Typography>
                <Box sx={{ 
                    borderBottom: '1px solid black',
                    mt: 3
                    }}
                >
                    <Typography
                        variant={isDesktop ? 'h5' : 'h6'}
                        align="left"
                        component="h5"
                    >
                        Experience
                    </Typography>
                </Box>
                <Typography variant="h6" align="left" component="p" sx={{ mt: '25px' }}>
                    Rocket Travel by Agoda - Software Engineer
                </Typography>
                <Typography variant="subtitle2" align="left" component="p">
                    Chicago, Illinois ~ May 2021 - January 2025
                </Typography>
                <List sx={{ mt: 2 }}>
                    <ListItem>
                        <ListItemIcon>
                            <CircleIcon sx={{ fontSize: '12px'}}/>
                        </ListItemIcon>
                        <Typography variant="body1" align="left" component="p">
                            Part of a globally distributed team responsible for launching and developing features (including testing) for multiple B2B white label travel portals with millions of users.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CircleIcon sx={{ fontSize: '12px'}}/>
                        </ListItemIcon>
                        <Typography variant="body1" align="left" component="p">
                            Created a micro frontend header & footer with a React FE and C#/.NET BE integrated to partner API’s and a Scala powered config store to handle customization per partner. App is used across the entire travel portal and reduced lead time to change by 90%.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CircleIcon sx={{ fontSize: '12px'}}/>
                        </ListItemIcon>
                        <Typography variant="body1" align="left" component="p">
                            Improved new partner onboarding from 2 months to 4 days through development of a responsive landing page (React FE and C#/.NET BE) that also allowed marketing to create custom campaigns through integrations with Builder.io.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CircleIcon sx={{ fontSize: '12px'}}/>
                        </ListItemIcon>
                        <Typography variant="body1" align="left" component="p">
                            Added FE analytics to the landing page to track user interaction through a full dashboard in Superset with data visualization to improve conversion by 5%.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CircleIcon sx={{ fontSize: '12px'}}/>
                        </ListItemIcon>
                        <Typography variant="body1" align="left" component="p">
                            Translated Figma designs into pixel-perfect, responsive UI components, ensuring visual consistency and high-quality implementation across web platforms.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CircleIcon sx={{ fontSize: '12px'}}/>
                        </ListItemIcon>
                        <Typography variant="body1" align="left" component="p">
                            Created fully accessible and responsive datepicker with React for in house component library with Storybook to be consumed by in house teams for Rocket Travel and Agoda.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CircleIcon sx={{ fontSize: '12px'}}/>
                        </ListItemIcon>
                        <Typography variant="body1" align="left" component="p">
                            Contributed work and code reviews to over 20 repos spread across FE & BE in React, C#, and Scala.
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CircleIcon sx={{ fontSize: '12px'}}/>
                        </ListItemIcon>
                        <Typography variant="body1" align="left" component="p">
                            Helped address 500+ accessibility defects in order to make travel portal WCAG 2.1 compliant. 
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <CircleIcon sx={{ fontSize: '12px'}}/>
                        </ListItemIcon>
                        <Typography variant="body1" align="left" component="p">
                            Achieved Secure Code Warrior Cybersecurity Certification (renewed annually), demonstrating proficiency in secure coding practices and application security.
                        </Typography>
                    </ListItem>
                </List>
                <Box sx={{ 
                    borderBottom: '1px solid black',
                    mt: 3
                    }}
                >
                    <Typography
                        variant={isDesktop ? 'h5' : 'h6'}
                        align="right"
                        component="h4"
                    >
                        Education
                    </Typography>
                </Box>
                <Typography variant="h6" align="left" component="p" sx={{ mt: '25px' }}>
                    Prime Digital Academy, Minneapolis MN — Full Stack Software Engineering Certification
                </Typography>
                <Typography variant="subtitle2" align="left" component="p">
                    October 2020 - March 2021
                </Typography>
                <Typography variant="body1" align="left" component="p" sx={{ mt: 1 }}>
                Accelerated and immersive program that includes public speaking, diversity and inclusion training, mentorship groups, and career development.
                </Typography>
                <Typography variant="h6" align="left" component="p" sx={{ mt: '25px' }}>
                    University Wisconsin-Milwaukee, Milwaukee WI — Bachelor of Fine Arts
                </Typography>
                <Typography variant="subtitle2" align="left" component="p">
                    Sept 2003 - Dec 2007
                </Typography>
                <Typography variant="body1" align="left" component="p" sx={{ mt: 1 }}>
                    Major in Film and Video Production. Minor in Film Studies (English). Digital Video Production Club
                </Typography>
                <Box sx={{ 
                    borderBottom: '1px solid black',
                    mt: 3
                    }}
                >
                    <Typography
                        variant={isDesktop ? 'h5' : 'h6'}
                        align="left"
                        component="h4"
                    >
                        Additional Skills
                    </Typography>
                </Box>
                <Typography variant="body1" align="left" component="p" sx={{ maxWidth: '800px', mt: '25px' }}>
                    Server-side rendering | Micro-services | Micro Frontends | Object Oriented Programming | Module Federation |
                    Component libraries | Design systems | Content management systems | Figma |
                    Accessibility | Front-end analytics | End to end testing | AI | Machine learning |
                    Collaborative Leadership | AGILE practices | Problem solving | Distributed teamwork
                </Typography>
                <Box sx={{
                    display: 'flex',
                    mt: 3,
                    mb: 1,
                    width: '100%',
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                    <img
                        src="/hireme.jpg"
                        alt="photo of Travis Huss"
                        width={isDesktop ? 250 : 225}
                        height={300}
                        style={{ 
                            borderRadius: '10px',
                            border: '1px solid black'
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
