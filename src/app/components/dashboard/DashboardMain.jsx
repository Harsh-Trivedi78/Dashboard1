import AccountProgress from "./AccountProgress";
import FranchiseesOnboard from "./fraob";
import KeyInsights from "./keyins";
import FinancialWellbeing from "./FinancialWellbeing";
// import ProspectLeads from "./prospetleads";
import PendingQuestions from "./PendingQuestions";
import HeaderBar from "./Headerbar";

export default function DashboardMain() {
  return (
    
    <div className="flex flex-col gap-6 p-6">
        <HeaderBar /> 
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AccountProgress />
        <FranchiseesOnboard />
        <KeyInsights />
      </div>
    
   

      {/* Bottom Row */}
      <PendingQuestions />
    </div>
  );
}