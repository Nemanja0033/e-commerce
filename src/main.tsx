import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './context/cart/CartContext.tsx'
import { AuthProvider } from './context/auth/AuthContext .tsx'

createRoot(document.getElementById('root')!).render(
<AuthProvider>
  <CartProvider>
    <App /> 
  </CartProvider>
</AuthProvider>,
)
