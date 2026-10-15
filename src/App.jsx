import { Routes, Route } from "react-router";
import FindPeople from "./pages/Transfer/FIndPeople";
import PeopleInformation from "./pages/Transfer/PeopleInformation";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPass from "./pages/auth/ForgotPass";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FindPeople />} />
      <Route path="/transferinfo" element={<PeopleInformation />} />

      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="auth">
        <Route index element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="forgot-password" element={<ForgotPass/>}/>
      </Route>
    </Routes>
  );
}

export default App;
