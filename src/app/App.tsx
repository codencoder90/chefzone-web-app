import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { TopBar } from './components/TopBar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { FindJobPage } from './pages/FindJobPage';
import { HiringPage } from './pages/HiringPage';
import { ProfessionalCateringPage } from './pages/ProfessionalCateringPage';
import { PermanentJobsPage } from './pages/PermanentJobsPage';
import { ReferBusinessPage } from './pages/ReferBusinessPage';
import { ReferFriendPage } from './pages/ReferFriendPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <TopBar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/find-job" element={<FindJobPage />} />
          <Route path="/hiring" element={<HiringPage />} />
          <Route path="/professional-catering" element={<ProfessionalCateringPage />} />
          <Route path="/permanent-jobs" element={<PermanentJobsPage />} />
          <Route path="/refer-business" element={<ReferBusinessPage />} />
          <Route path="/refer-friend" element={<ReferFriendPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
