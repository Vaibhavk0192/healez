import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/dashboard";
import Navbar from "./Pages/Navbar/navbar";
import "./App.css";
import Report from "./Pages/report/reports";
import Family from "./Pages/Family/family";
import Insurance from "./Pages/Insurance/insurance";
import Hospital from "./Pages/hospital/hospital";
import Hospitals from "./Pages/HospitalS/hospitals";
import Hsignup from "./Pages/Hsignup/hsignup";
import Admission from "./Pages/Admission/amission";
import Ulogin from "./Pages/Ulogin/ulogin";
import Usignup1 from "./Pages/Usignup1/usignup1";
import Usignup2 from "./Pages/Usignup1/usignup2";
import Usignup3 from "./Pages/Usignup1/usignup3";
import Usignup4 from "./Pages/Usignup1/usignup4";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/report" element={<Report />} />
          <Route path="/family" element={<Family />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/hospital" element={<Hospital />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/hsignup" element={<Hsignup />} />
          <Route path="/ulogin" element={<Ulogin />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/usignup1" element={<Usignup1 />} />
          <Route path="/usignup2" element={<Usignup2 />} />
          <Route path="/usignup3" element={<Usignup3 />} />
          <Route path="/usignup4" element={<Usignup4 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
