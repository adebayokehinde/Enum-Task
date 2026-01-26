// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import LetMeetYou from "./pages/LetMeetYou";
import AddCompany from "./pages/AddCompany";
import InviteTeam from "./pages/InviteTeam";
import EmailVerification from "./pages/EmailVerification";
import LetMeetYouMobile from "./pages/LetMeetYouMobile";
import Dashboard from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default page when opening "/" */}
          <Route index element={<LetMeetYou />} />

          {/* All other routes inside the layout */}
          <Route path="letmeetyou" element={<LetMeetYou />} />
          <Route path="email-verification" element={<EmailVerification />} />
          <Route path="addcompany" element={<AddCompany />} />
          <Route path="inviteteam" element={<InviteTeam />} />
        </Route>

        {/* Other standalone routes */}
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/letmeetyoumobile" element={<LetMeetYouMobile />} />
      </Routes>
    </Router>
  );
}

export default App;
