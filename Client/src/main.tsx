import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {

  ApiProvider,
} from '@reduxjs/toolkit/query/react'
import { API } from './Redux/API/API.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={API} >
    <App />
    </ApiProvider>
  </React.StrictMode>,
)
