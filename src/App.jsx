// App.js or wherever your routes are defined
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import LetMeetYou from "./pages/LetMeetYou";
import AddCompany from "./pages/AddCompany";
import InviteTeam from "./pages/InviteTeam";
// import page from "./pages/Dashboard/page";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="letmeetyou" element={<LetMeetYou />} />
          <Route path="addcompany" element={<AddCompany />} />
          <Route path="inviteteam" element={<InviteTeam />} />
          {/* <Route path="/dashboard" element={<page />} />  */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
