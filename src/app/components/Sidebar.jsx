import { FaRegCircle } from 'react-icons/fa';
import '../globals.css';
import { FiX } from 'react-icons/fi';

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

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-full w-64 bg-gradient-to-b from-[#003049] to-[#004F6D] text-white transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out sm:static sm:translate-x-0 sm:flex`}
    >
      <div className="flex flex-col justify-between h-full p-5 w-full">
        {/* Close button on mobile */}
        <div className="sm:hidden flex justify-end mb-4">
          <button onClick={onClose} className="text-white text-2xl">
            <FiX />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="space-y-3 text-sm">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center justify-between px-4 py-2 rounded-lg ${
                index === 0 ? 'bg-white text-[#003049] font-semibold' : 'hover:bg-white/10'
              }`}
            >
              <span>{item}</span>
              {item === 'Pending Questions' && (
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">3</span>
              )}
            </li>
          ))}
        </ul>

        {/* Logout */}
        <div className="mt-8 flex items-center space-x-2 px-4 text-sm text-gray-300 hover:text-white cursor-pointer">
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
}
