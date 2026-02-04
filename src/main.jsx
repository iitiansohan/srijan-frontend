import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Seo from './components/Seo.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Seo />
    <App />
  </BrowserRouter>
)
