import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LetMeetYou from "./pages/LetMeetYou/LetMeetYou";
import AddCompany from "./pages/AddCompany/AddCompany";
import InviteTeam from "./pages/InviteTeam/InviteTeam";
import EmailVerification from "./pages/LetMeetYou/EmailVerification";
import LetMeetYouMobile from "./pages/LetMeetYou/LetMeetYouMobile";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<LetMeetYou />} />

          
          <Route path="letmeetyou" element={<LetMeetYou />} />
          <Route path="email-verification" element={<EmailVerification />} />
          <Route path="addcompany" element={<AddCompany />} />
          <Route path="inviteteam" element={<InviteTeam />} />
        </Route>

        
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/letmeetyoumobile" element={<LetMeetYouMobile />} />
      </Routes>
    </Router>
  );
}

export default App;
