import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginWrapper from './Login/main';
import MemberMain from './MemberView/main'; // Adjust path as needed
import MainAddClient from './MemberView/AddClient/MainAddClient';
import MainAllDetails from './MemberView/LeadDetails/Main';
import ChairmanView from './CEOsView/main';
import TotalCommissionsPage from './MemberView/TotalCommissions/TotalCommissions';
import MainMyProfile from './MemberView/MyProfile/Main';
import ReferralMain from './Reuse/MyAllReferrals/MainAllReferrals';

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
      </Routes>
    </Router>
  );
}

export default App;
