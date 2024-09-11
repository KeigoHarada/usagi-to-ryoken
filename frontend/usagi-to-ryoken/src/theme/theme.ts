import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: 'Noto Sans JP, sans-serif',
    },
    palette: {
        primary: {
            main: '#FFFFFF', // Set the primary color to white
        },
        background: {
            default: 'darkslategray',
        },
    }
});
