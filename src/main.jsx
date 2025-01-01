import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='bg-primary-100 text-primary-200 font-sans min-h-screen p-2 md:p-4'> 
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)