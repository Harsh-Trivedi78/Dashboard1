// src/app/page.js
'use client';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Sidebar from './components/Sidebar';
import DashboardMain from './components/dashboard/DashboardMain';
import './globals.css';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-[#003049]">
      {/* Toggle Button for Mobile */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="sm:hidden fixed top-4 left-4 z-50 text-white bg-[#003049] p-2 rounded-full shadow-lg"
        >
          <FiMenu size={24} />
        </button>
      )}

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 min-h-screen">
        <DashboardMain />
      </main>
    </div>
  );
}
