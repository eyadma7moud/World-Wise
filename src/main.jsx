import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"

import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';
polyfillCountryFlagEmojis();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
