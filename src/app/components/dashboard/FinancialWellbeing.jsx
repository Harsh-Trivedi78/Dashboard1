export default function FinancialWellbeing() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow w-full">
      <h2 className="font-semibold text-base sm:text-lg mb-4">Financial Wellbeing</h2>
      
      <div className="text-xs sm:text-sm text-gray-600 mb-1">20 Total Franchisees</div>
      <div className="text-green-500 text-xs sm:text-sm mb-4">▲ 2.1%</div>

      <div className="flex justify-between flex-wrap gap-4 text-base sm:text-lg font-semibold">
        <div>
          <div className="text-gray-500 text-xs sm:text-sm">Target</div>
          <div>$500,000</div>
        </div>
        <div>
          <div className="text-gray-500 text-xs sm:text-sm">Current</div>
          <div>$450,000</div>
        </div>
      </div>
    </div>
  );
}
