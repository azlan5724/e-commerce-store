// app/layout.tsx

'use client';

import './globals.css';
import { CartProvider } from '../context/CartContext';
import Header from '../components/Header';
import { FaFacebook, FaTwitter, FaInstagram, FaHome } from 'react-icons/fa';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My E-commerce Site</title>
      </head>
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <CartProvider>
          <Header />

          {/* Main Content */}
          <main className="flex-1 container mx-auto p-8">{children}</main>

          {/* Footer Section */}
          <footer className="bg-blue-800 text-white p-6 text-center">
            <p>&copy; 2023 My E-commerce Site</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="text-white hover:text-yellow-400 transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} className="text-white hover:text-yellow-400 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="text-white hover:text-yellow-400 transition" />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FaHome size={30} className="text-white hover:text-yellow-400 transition" />
              </a>
            </div>
          </footer>
        </CartProvider>  {/* End of CartProvider */}
      </body>
    </html>
  );
}