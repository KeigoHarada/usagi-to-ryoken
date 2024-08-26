import React from 'react';
import { AppBar, Toolbar, Typography, Box, useTheme, useMediaQuery } from '@mui/material';

const GameHeader: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div id="header">
      <AppBar position="static" sx={{ backgroundColor: '#2e7d32' }}>
        <Toolbar>
          <Box
            component="img"
            src="/src/assets/usagitoryoken.webp"
            alt="ウサギvs猟犬"
            sx={{
              width: isMobile ? 40 : 80,
              height: isMobile ? 40 : 80,
              marginRight: 2,
              borderRadius: '12px',
            }}
          />
          <Typography
            variant={isMobile ? "h6" : "h4"}
            component="h1"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            ウサギvs猟犬
          </Typography>
        </Toolbar>
      </AppBar>
    </ div>
  );
};

export default GameHeader;