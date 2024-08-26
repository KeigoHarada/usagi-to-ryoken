import React from 'react';
import { Box, Typography } from '@mui/material';
import VisGraph from './graph';

const Content = () => {
    return (
        <div className="content">
            <Box
                sx={{
                    width: 1000,
                    height: 600,
                    border: '1px solid #ccc',
                    borderRadius: 2,
                    overflow: 'hidden',
                    p: 2,
                }}>
                <Typography variant="h4" padding={3}>ステージ</Typography>
                <VisGraph />
            </Box>
        </div >
    )
}
export default Content;