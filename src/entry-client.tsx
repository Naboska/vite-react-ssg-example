import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const modules = import.meta.glob('./pages/**/*.tsx', {eager: true})

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
