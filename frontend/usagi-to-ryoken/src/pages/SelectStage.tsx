import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import React from 'react'

function SelectStage() {
    const theme = useTheme();
    return (

        <Stack display={'flex'} sx={{ width: '100%' }}  >
            {/* stageSelectの表示 */}
            <div className="stageSelect">
                <Box
                    sx={{
                        height: '50px',
                        width: '40%',
                        backgroundColor: 'darkgray',
                        borderRadius: '10px',
                        margin: 'auto',
                    }}
                >
                    <Box
                        sx={{
                            height: '100%',
                            width: '100%',
                            backgroundColor: 'darkgray',
                            borderRadius: '10px',
                            margin: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant='h4' align="center" sx={{ color: theme.palette.primary.main }}>
                            Select Stage
                        </Typography>
                    </Box>
                </Box>
            </div>

            {/* stage選択ボタンの表示 */}
            <div className="stageSelectButton">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Button variant="contained" color="primary" sx={{ margin: '10px' }}>Stage1</Button>
                    <Button variant="contained" color="primary" sx={{ margin: '10px' }}>Stage2</Button>
                    <Button variant="contained" color="primary" sx={{ margin: '10px' }}>Stage3</Button>
                </ Box>
            </div>

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

export default SelectStage