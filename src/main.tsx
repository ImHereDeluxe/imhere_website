import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import { store } from "./entities/store";
import './index.css'
import App from './App.tsx'

if (window.location.pathname === "/") {
    window.location.replace("/auth");
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </StrictMode>,
)
