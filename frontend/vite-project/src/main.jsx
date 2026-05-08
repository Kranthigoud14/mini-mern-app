import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context1Provider from './contexts/Context1'
import ContextProvider from './contexts/ContextProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context1Provider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Context1Provider>
  </StrictMode>,
)
