import {Route, Routes } from "react-router";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPass from "./pages/auth/ForgotPass";

function App() {
  return (
    <Routes>
      <Route path="auth">
        <Route index element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="forgot-password" element={<ForgotPass/>}/>
      </Route>
    </Routes>
  );
}

export default App;
