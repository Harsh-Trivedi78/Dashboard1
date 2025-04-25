

export default function FranchiseDashboard() {
  return (
    <div className="space-y-14 w-full">
      {/* Franchisees Onboard Card */}
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start w-full">
          <div className="w-full">
            <h2 className="font-semibold text-base mb-1">Total Franchisees Onboard</h2>

            {/* Stat + Badge + Avatar Row */}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-black">14</span>
                <img
                  src="/Badge.svg"
                  alt="Badge"
                  className="w-[66px] h-[24px]"
                />
              </div>

              {/* Avatars pushed to extreme right */}
              <img
                src="/Agroup.svg"
                alt="Avatars"
                className="w-28 h-auto"
              />
            </div>
          </div>
        </div>

        {/* Horizontal Progress Bar Row */}
        <div className="flex gap-2 items-center w-full">
          <div className="h-2 rounded-full" style={{ backgroundColor: "#1F7EAA", width: "80%" }} />
          <div className="h-2 rounded-full" style={{ width: "60%", backgroundColor: "#2fbdff" }} />
          <div className="h-2 rounded-full" style={{ width: "100%", backgroundColor: "#97DEFF" }} />
        </div>

        {/* Stage Labels */}
        <div className="space-y-3 text-sm text-gray-700 pt-1">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-900"></span>
              Stage 1 (Initial Inquiry)
            </span>
            <span className="font-bold">02</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              Stage 2 (Document Submission)
            </span>
            <span className="font-bold">07</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-300"></span>
              Stage 3 (Training)
            </span>
            <span className="font-bold">05</span>
          </div>
        </div>
      </div>

      {/* Financial Wellbeing Card */}
      <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 space-y-4">
        {/* Title */}
        <h2 className="font-semibold text-sm text-black">Financial Wellbeing</h2>

        {/* Main Stat + Growth */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900 leading-tight">20</p>
            <p className="text-sm text-gray-500">Total Franchisees</p>
          </div>
          <img
            src="/bdg1.svg"
            alt="Badge"
            className="w-[66px] h-[24px]"
          />
        </div>

        <hr className="border-t border-gray-200" />

        {/* Target vs Current */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="bg-gray-100 rounded-xl p-3 text-center">
            <p className="text-xs text-gray-500">Target</p>
            <p className="text-lg font-semibold text-gray-900">$500,000</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-3 text-center">
            <p className="text-xs text-gray-500">Current</p>
            <p className="text-lg font-semibold text-gray-900">$450,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
