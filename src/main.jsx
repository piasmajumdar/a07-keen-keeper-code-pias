import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './routes/router';
import { ToastContainer } from 'react-toastify'
import { TimelineProvider } from './context/TimelineContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center" />
    </TimelineProvider>
  </StrictMode>,
)
