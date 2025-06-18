import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginWrapper from './Login/main';
import MemberMain from './MemberView/main'; // Adjust path as needed
import MainAddClient from './MemberView/AddClient/MainAddClient';
import MainAllDetails from './MemberView/LeadDetails/Main';
import ChairmanView from './CEOsView/main';
import TotalCommissionsPage from './MemberView/TotalCommissions/TotalCommissions';
import MainMyProfile from './MemberView/MyProfile/Main';
import ReferralMain from './Reuse/MyAllReferrals/MainAllReferrals';
import CeoMembersMain from './CEOsView/CeosMembers/main';
import MainTotalComm from './CEOsView/TotalComm/Main';
import MainRequests from './CEOsView/Requests/Main';
import MainMemberDetails from './CEOsView/Member-Details/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/main" element={<MemberMain />} />
        <Route path="/chairman" element={<ChairmanView />} />
        <Route path="/add-client" element={<MainAddClient />} />
        <Route path="/all-my-referrals" element={<ReferralMain />} />
        <Route path="/all-referrals" element={<ReferralMain />} />
        <Route path="/all-my-commissions" element={<TotalCommissionsPage />} />
        <Route path="/referral/:id" element={<MainAllDetails />} />
        <Route path="/my-profile" element={<MainMyProfile />} />
        <Route path="/ceos-members" element={<CeoMembersMain />} />
        <Route path="/total-commissions" element={<MainTotalComm />} />
        <Route path="/membership-requests" element={<MainRequests />} />
        <Route path="/member/:id" element={<MainMemberDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
