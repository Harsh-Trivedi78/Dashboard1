export default function KeyInsights() {
  const leads = [
    {
      name: "Wade Warren",
      stage: "Initial Inquiry",
      img: "/ww.svg", // saved in public folder
    },
    {
      name: "Ava Wright",
      stage: "Initial Inquiry",
      img: "/aw.svg",
    },
    {
      name: "Cody Fisher",
      stage: "Initial Inquiry",
      img: "/cf.svg",
    },
  ];

  return (
    <div className="space-y-6 w-full">
      {/* Key Insights & Feedback */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow space-y-4">
        <h2 className="font-semibold text-base sm:text-lg">Key Insights & Feedback</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-3xl font-bold text-black leading-none">10%</div>
            <div className="text-sm font-semibold text-gray-500 mt-1">Sales Growth</div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/profpic.png"
              alt="Top Performer"
              className="w-10 h-10 mb-1 object-contain"
            />
            <span className="bg-blue-100 text-[#2FC5FF] text-xs px-3 py-1 rounded-full">
              Top Performer
            </span>
          </div>
        </div>

        <hr className="border-t border-gray-200" />

        <div className="bg-gray-100 p-3 sm:p-4 rounded-md">
          <div className="font-semibold text-sm mb-1 text-gray-800">Feedback</div>
          <div className="flex items-start text-sm text-gray-700">
            <span className="w-2 h-2 rounded-full bg-gray-400 mr-2 mt-1 shrink-0"></span>
            Franchisees are requesting more detailed training materials.
          </div>
        </div>
      </div>

      {/* Prospect Leads */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow space-y-4">
        <h2 className="font-semibold text-base sm:text-lg">Prospect Leads</h2>
        <div className="space-y-3">
          {leads.map((lead, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-100 p-3 rounded-lg gap-2 sm:gap-4">
              <div className="flex items-center gap-3">
                <img src={lead.img} alt={lead.name} className="w-8 h-8 rounded-full" />
                <span className="text-sm font-medium text-gray-800">{lead.name}</span>
              </div>
              <span className="text-xs text-gray-500 sm:text-right">Stage: {lead.stage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
