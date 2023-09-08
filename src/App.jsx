import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import CreatePage from "./pages/CreatePage";
import ProgressPage from "./pages/ProgressPage";
import CompletedPage from "./pages/CompletedPage";
import PendingPage from "./pages/PendingPage";
import AllTaskPage from "./pages/NewPage";
import { getUserDetails } from "./helper/SessionHelper";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is authenticated
    const userDetails = getUserDetails();
    setUser(userDetails);
  }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/Registration" element={<RegistrationPage />} />

          {/* Protected Routes */}
          {user ? (
            <>
              <Route path="/Dashboard" element={<DashboardPage />} />
              <Route path="/Create" element={<CreatePage />} />
              <Route path="/AllTask" element={<AllTaskPage />} />
              <Route path="/Progress" element={<ProgressPage />} />
              <Route path="/Completed" element={<CompletedPage />} />
              <Route path="/Pending" element={<PendingPage />} />
              <Route path="/Profile" element={<ProfilePage />} />
            </>
          ) : (
            // Redirect unauthenticated users to the login page
            <Route path="/login" element={<Navigate to="/" />} />
          )}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
