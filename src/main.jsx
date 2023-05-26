import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './routes/MainRoutes';
import AuthProviders from './providers/AuthProviders';
// import 'react-tabs/style/react-tabs.css';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode >
)
