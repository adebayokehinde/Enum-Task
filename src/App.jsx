// App.js or wherever your routes are defined
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import LetMeetYou from "./pages/LetMeetYou";
import AddCompany from "./pages/AddCompany";
import InviteTeam from "./pages/InviteTeam";
import EmailVerification from "./pages/EmailVerification";

import Dashboard from "./pages/DashboardPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="letmeetyou" element={<LetMeetYou />} />
          <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="addcompany" element={<AddCompany />} />
          <Route path="inviteteam" element={<InviteTeam />} />

        </Route>
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>

    </Router>
  );
}

export default App;
