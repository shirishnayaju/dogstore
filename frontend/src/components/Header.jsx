import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { ShoppingCart, User, LogOut } from 'lucide-react';

export default function Header() {
  const { user, logout } = useAuth();
  const { items } = useCart();

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-4xl font-bold">
            GHARPALUWA
          </Link>
          <nav>
            <ul className="flex items-center space-x-4">
              <li><Link to="/" className="hover:text-blue-200 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-blue-200 transition-colors">Products</Link></li>
              <li>
                <Link to="/cart" className="flex items-center hover:text-blue-200 transition-colors">
                  <ShoppingCart className="w-5 h-5 mr-1" />
                  <span className="hidden sm:inline">Cart</span>
                  <span className="ml-1 bg-white text-blue-600 rounded-full px-2 py-1 text-xs font-bold">
                    {items.length}
                  </span>
                </Link>
              </li>
              <li><Link to="/vaccination" className="hover:text-blue-200 transition-colors">Vaccination</Link></li>
              {user ? (
                <>
                  <li>
                    <Link to="/profile" className="flex items-center hover:text-blue-200 transition-colors">
                      <User className="w-5 h-5 mr-1" />
                      <span className="hidden sm:inline">Profile</span>
                    </Link>
                  </li>
                  {user.isAdmin && (
                    <li>
                      <Link to="/admin" className="hover:text-blue-200 transition-colors">Admin</Link>
                    </li>
                  )}
                  <li>
                    <button onClick={logout} className="flex items-center hover:text-blue-200 transition-colors">
                      <LogOut className="w-5 h-5 mr-1" />
                      <span className="hidden sm:inline">Logout</span>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li><Link to="/signup" className="hover:text-blue-200 transition-colors">Sign Up</Link></li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}