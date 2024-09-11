import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'

function NoMatch() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box
            sx={{
                height: isMobile ? 'calc(100vh - 80px)' : 'calc(100vh - 120px)',
            }}>
            <Typography variant="h2" align="center" position="relative" top="50%"
                sx={{ color: theme.palette.primary.main }}  >
                404 Not Found
            </Typography>
        </Box >
    )
}

export default NoMatch