import { Box, Stack, useTheme } from '@mui/material'
import React from 'react'

function Home() {
    const theme = useTheme();
    return (

        <Stack display={'flex'}
            sx={{
                width: '100%',
                marginTop: '5rem',
            }}  >

            {/* stageの表示 */}
            <div className="stages">
                <Box
                    display={'flex'}
                    sx={{
                        height: '50vh',
                        width: '70%',
                        backgroundColor: 'darkgray',
                        borderRadius: '10px',
                        margin: 'auto',
                    }}
                >
                </Box>
            </div>
        </Stack>
    )
}

export default Home