import React, { useState } from 'react';
import { User, LogOut, ShoppingBag, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const UserMenu = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  const handleLogout = async () => {
    try {
      await logout();
      setIsOpen(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <img
          src={user.photoURL || 'https://via.placeholder.com/32'}
          alt={user.displayName || 'User'}
          className="w-8 h-8 rounded-full"
        />
        <span className="hidden md:block text-sm font-medium text-gray-700">
          {user.displayName?.split(' ')[0] || 'User'}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            {/* User Info */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <img
                  src={user.photoURL || 'https://via.placeholder.com/40'}
                  alt={user.displayName || 'User'}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{user.displayName}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-2">
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200">
                <User className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-700">Profile</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200">
                <ShoppingBag className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-700">Order History</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200">
                <Settings className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-700">Settings</span>
              </button>
            </div>

            {/* Logout */}
            <div className="border-t border-gray-200 py-2">
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-red-50 transition-colors duration-200 text-red-600"
              >
                <LogOut className="h-4 w-4" />
                <span className="text-sm">Sign Out</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserMenu;