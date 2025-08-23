
// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import FormSection from "./components/FormSection";
import HeroSection from "./components/HerosSection";
import Footer from "./components/Footer";
import Signup from "./pages/Signup/Signup"; 

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FormSection />
              <div className="mockupcontainer">
                <HeroSection />
              </div>
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
