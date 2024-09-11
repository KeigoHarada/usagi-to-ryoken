import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import { Stack } from '@mui/material';


export default function AppLayout() {

    return (
        <Stack sx={{ display: 'flex' }}>
            {/* Header */}
            <Header />
            {/* Body */}
            <Box>
                <Outlet />
            </Box>
        </Stack>
    );
}
