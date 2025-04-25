'use client'; // Ensures this code runs only on the client side

import { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaCheckCircle } from 'react-icons/fa';

export default function AccountProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(85);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full sm:max-w-sm">
      <h2 className="font-inter font-semibold text-[16px] sm:text-[16px] leading-[24px] text-center mb-4">
        Account Progress
      </h2>

      {/* Progress Circle */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={buildStyles({
              strokeLinecap: 'round',
              pathColor: `#279DD4`,
              textColor: '#333',
              trailColor: '#E5E7EB',
              pathTransition: 'stroke-dashoffset 1.5s ease-in-out',
            })}
          />
        </div>
      </div>

      {/* Steps Section */}
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-medium text-sm sm:text-sm text-gray-800 mb-2">Steps Completed</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
            {["Profile Setup", "Initial Training", "Legal Documents"].map((step) => (
              <li key={step} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                  <span>{step}</span>
                </div>
                <img src="/tick2.svg" alt="Completed" className="w-4 h-4" />
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-medium text-sm sm:text-sm text-gray-800 mb-2">Steps Remaining</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-500">
            {["Financial Integration", "Final Review"].map((step) => (
              <li key={step} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                  <span>{step}</span>
                </div>
                <img src="/tick.svg" alt="Completed" className="w-4 h-4" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
