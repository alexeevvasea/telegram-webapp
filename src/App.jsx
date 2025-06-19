// src/App.jsx
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import WelcomePage from "@/pages/WelcomePage";
import DashboardPage from "@/pages/DashboardPage";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const onboardingComplete = localStorage.getItem("onboardingComplete");
    if (onboardingComplete) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
