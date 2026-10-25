import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'
import {BrowserRouter , Routes , Route } from "react-router";
import Dashboard from "./Pages/Dashboard.jsx";

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <ClerkProvider appearance={"dark"}>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      </BrowserRouter>

    </ClerkProvider>
  </StrictMode>,
);
