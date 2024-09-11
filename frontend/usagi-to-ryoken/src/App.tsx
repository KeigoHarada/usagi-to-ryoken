import { Home } from '@mui/icons-material'
import './App.css'
import AppLayout from './components/layout/AppLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SelectStage from './pages/SelectStage'
import Game from './pages/Game'
import NoMatch from './pages/NoMatch'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { theme } from './theme/theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<AppLayout />} >
              <Route index element={<Home />} />
              <Route path="stage" element={<SelectStage />} />
              <Route path="game" element={<Game />} />
              <Route path='*' element={<NoMatch />} />
            </Route >
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
