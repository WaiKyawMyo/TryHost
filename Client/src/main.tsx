import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Notelist from './Components/Notelist.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Notelist/>
  </StrictMode>,
)
