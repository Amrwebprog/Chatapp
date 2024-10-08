import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createRoot } from 'react-dom/client'

import 'sweetalert2/dist/sweetalert2.min.css'
import App from './App.jsx'
import './index.scss'

createRoot(document.getElementById('root')).render(<App />)
