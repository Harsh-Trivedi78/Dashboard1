export default function ProspectLeads() {
  const leads = [
    { name: "Wade Warren", stage: "Initial Inquiry" },
    { name: "Ava Wright", stage: "Initial Inquiry" },
    { name: "Cody Fisher", stage: "Initial Inquiry" },
  ];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl shadow w-full max-w-full">
      <h2 className="font-semibold text-lg sm:text-xl mb-4">Prospect Leads</h2>
      <ul className="space-y-4">
        {leads.map((lead, idx) => (
          <li
            key={idx}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-50 p-3 rounded-lg"
          >
            <span className="text-sm sm:text-base font-medium text-gray-800">{lead.name}</span>
            <span className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-0">
              Stage: {lead.stage}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
