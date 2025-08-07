import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { navLinks } from './db/db.js'
import './index.css'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App navLinks={navLinks} />
    </BrowserRouter>
)
