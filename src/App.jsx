import { Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./layouts/MainLayout";
import LandingLayout from "./layouts/LandingLayout";
import LandingPage from "./pages/LandingPage";
import Dashbord from "./pages/dashboard/Dashboard";
import FindPeople from "./pages/Transfer/TransferPage";
import PeopleInformation from "./pages/Transfer/PeopleInformation";
import History from "./pages/history/History";
import TopUp from "./pages/topup/Topup";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPass from "./pages/auth/ForgotPass";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="dashboard" element={<Dashbord />} />
          <Route path="transfer">
            <Route index element={<FindPeople />} />
            <Route path="info" element={<PeopleInformation />} />
          </Route>
          <Route path="history" element={<History />} />
          <Route path="top-up" element={<TopUp />} />
          <Route path="profile" element={<EditProfile />} />
        </Route>
        <Route path="auth">
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPass />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
