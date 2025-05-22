import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginWrapper from './Login/main';
import MemberMain from './MemberView/main'; // Adjust path as needed
import MainAddClient from './MemberView/AddClient/MainAddClient';
import ReferralMain from './MemberView/MyAllReferrals/MainAllReferrals';
import MainAllDetails from './MemberView/LeadDetails/Main';
import ChairmanView from './CEOsView/main';
import ChairmanReferralMain from './CEOsView/AllReferrals/MyAllReferrals/MainAllReferrals';
import ChairmanAddClient from './CEOsView/AddClient/MainAddClient';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/main" element={<MemberMain />} />
        <Route path="/chairman" element={<ChairmanView />} />
        <Route path="/add-client" element={<MainAddClient />} />
        <Route path="/add-client-chairman" element={<ChairmanAddClient />} />
        <Route path="/all-my-referrals" element={<ReferralMain />} />
        <Route path="/all-referrals" element={<ChairmanReferralMain />} />
        <Route path="/referral/:id" element={<MainAllDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
