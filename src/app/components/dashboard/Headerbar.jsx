// components/HeaderBar.js
import { Settings } from 'lucide-react';

export default function HeaderBar() {
  return (
    <div className="flex justify-end items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white shadow-sm rounded-xl mb-3 sm:mb-4">
      <Settings className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer" />
      <img
  src="/hdr.svg"
  alt="User Avatar"
  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
/>

    </div>
  );
}
