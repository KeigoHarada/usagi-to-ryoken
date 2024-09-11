import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { theme } from './theme/theme'
import AppLayout from './components/layout/AppLayout'
import Home from './pages/Home'
import SelectStage from './pages/SelectStage'
import Game from './pages/Game'
import NoMatch from './pages/NoMatch'
import Stage1 from './components/stages/stage1'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<AppLayout />} >
              <Route index element={<Home />} />
              <Route path='selectstage' element={<SelectStage />} >
                <Route path="stage1" element={<Stage1 />} />
              </Route>
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
