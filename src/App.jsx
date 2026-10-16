import { Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Dashbord from  "./pages/dashboard/Dashboard"
import FindPeople from "./pages/Transfer/FIndPeople";
import PeopleInformation from "./pages/Transfer/PeopleInformation";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPass from "./pages/auth/ForgotPass";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route path="transfer">
          <Route index element={<FindPeople />} />
          <Route path="info" element={<PeopleInformation />} />
        </Route>
        <Route path="dashboard" element={<Dashbord/>} />
        <Route path="profile" element={<EditProfile />} />
      </Route>
      <Route path="auth">
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPass />} />
      </Route>
    </Routes>
  );
}

export default App;
