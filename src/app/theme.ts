'use client';
import { blue, red, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
          main: blue['A700'],
        },
        secondary: {
            main: yellow[700],
        },
        success: {
            main: red['A700'],
        },
    },
    typography: {
        fontFamily: 'Raleway, Arial'
      },
});

export default theme;