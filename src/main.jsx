// code of main.jsx is constant and will not change

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import content from app.jsx
import App from './app'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
