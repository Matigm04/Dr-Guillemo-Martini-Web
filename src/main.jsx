import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// StrictMode desactivado para mejor rendimiento
// En producción, el rendimiento no se verá afectado
createRoot(document.getElementById('root')).render(
  <App />
)
