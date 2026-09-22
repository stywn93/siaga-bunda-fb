import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AppShell from './AppShell.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<AppShell/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>
)