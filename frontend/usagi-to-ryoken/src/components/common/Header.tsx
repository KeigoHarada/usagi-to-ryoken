import React from 'react';
import { AppBar, Toolbar, Typography, useTheme, useMediaQuery, Box } from '@mui/material';

const GameHeader: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            <AppBar position="static" className='header'
                sx={{
                    backgroundColor: theme.palette.background.default, // テーマの背景色を使用
                    boxShadow: 'none',
                    position: 'relative',
                    height: isMobile ? '80px' : '120px',
                }} >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        position: 'relative',
                        zIndex: 2,
                    }}
                >
                    <Typography
                        variant={isMobile ? "h4" : "h3"}
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            color: theme.palette.primary.main, // テーマのプライマリカラーを使用
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        }}
                    >
                        ウサギvs猟犬
                    </Typography>
                </Toolbar>
                <Box
                    component="img"
                    src="../../../public/header2.png" // 画像のパスを確認
                    alt="ウサギvs猟犬"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.5,
                        zIndex: 1,
                    }}
                />
            </AppBar>
        </div>
    );
};

export default GameHeader;