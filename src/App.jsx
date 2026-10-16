import { Routes, Route } from "react-router";

import EditProfile from "./pages/EditProfile";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPass from "./pages/auth/ForgotPass";
import TransferPage from "./pages/Transfer/TransferPage";
import TransferSummary from "./pages/Transfer/TransferSummary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TransferPage />} />
      <Route path="/transfer" element={<TransferSummary />} />

      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="auth">
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPass />} />
      </Route>
    </Routes>
  );
}

export default App;
