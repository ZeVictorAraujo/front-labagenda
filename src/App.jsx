import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";

export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </main>
    </Router>
  );
}