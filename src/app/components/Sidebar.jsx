"use client";

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import '../globals.css';

const menuItems = [
  "Home",
  "Stages & Checklist",
  "Upload Docs",
  "Preferred Vendors",
  "Tech Stack",
  "Targets",
  "Zee Sales Targets",
  "MAI Settings",
  "Pending Questions",
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <>
      {/* Mobile Menu Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 sm:hidden text-3xl text-[#003049] bg-white p-2 rounded-md shadow-md"
        >
          <FiMenu />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-[#003049] text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out sm:static sm:translate-x-0 sm:flex`}
      >
        <div className="flex flex-col h-full p-5 w-full pt-24">
          {/* Close button on mobile */}
          <div className="sm:hidden flex justify-end mb-4">
            <button onClick={() => setIsOpen(false)} className="text-white text-2xl">
              <FiX />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="space-y-3 text-sm">
            {menuItems.map((item, index) => {
              const isActive = item === activeItem;

              return (
                <li
                  key={index}
                  onClick={() => setActiveItem(item)}
                  className={`flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 font-medium
                    ${
                      isActive
                        ? 'bg-[#2FBCFE]/10 text-[#2FBCFE]'
                        : 'text-white/70 hover:bg-white hover:text-[#003049]'
                    }`}
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '16px',
                    lineHeight: '20px',
                  }}
                >
                  <span>{item}</span>
                  {item === 'Pending Questions' && (
                    <span className="bg-[#2FBCFE] text-white text-xs px-2 py-0.5 rounded-full">3</span>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Logout */}
          <div className="mt-14 flex items-center space-x-2 px-4 text-sm text-gray-300 hover:text-white cursor-pointer">
            <span>Logout</span>
          </div>
        </div>
      </aside>
    </>
  );
}
