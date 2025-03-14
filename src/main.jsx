import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext' // ✅ Импортируем провайдер корзины
import "./i18n.js";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider> {/* ✅ Оборачиваем App */}
      <App />
    </CartProvider>
  </BrowserRouter>
)
