import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppShell from './AppShell.tsx'
import Content from './components/Content.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path='/' element={ <Content /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)