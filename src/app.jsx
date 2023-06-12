import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/dashboard";
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

// Solana stuff
import { useMemo } from "react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { SolanaProvider } from "./context/SolanaContext";
import PrivateRoute from "./components/PrivateRoute";
import LoginRoute from "./components/LoginRoute";

const App = () => {
  const { RPC_ENDPOINT } = require("./utils/constants.js");

  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={RPC_ENDPOINT}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <SolanaProvider>
            <BrowserRouter>
              <main>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <PrivateRoute>
                        <Dashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/report"
                    element={
                      <PrivateRoute>
                        <Report />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/family"
                    element={
                      <PrivateRoute>
                        <Family />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/insurance"
                    element={
                      <PrivateRoute>
                        <Insurance />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/hospital"
                    element={
                      <PrivateRoute>
                        <Hospital />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/admission"
                    element={
                      <PrivateRoute>
                        <Admission />
                      </PrivateRoute>
                    }
                  />
                  {/* hospital dashboard*/}
                  <Route
                    path="/hlogin"
                    element={
                      <LoginRoute>
                        <Hospitals />
                      </LoginRoute>
                    }
                  />
                  {/* hospital login */}
                  <Route
                    path="/hsignup"
                    element={
                      <LoginRoute>
                        <Hsignup />
                      </LoginRoute>
                    }
                  />
                  {/* hospital signup*/}
                  <Route
                    path="/login"
                    element={
                      <LoginRoute>
                        <Ulogin />
                      </LoginRoute>
                    }
                  />
                  <Route
                    path="/usignup1"
                    element={
                      <LoginRoute>
                        <Usignup1 />
                      </LoginRoute>
                    }
                  />
                  <Route
                    path="/usignup2"
                    element={
                      <LoginRoute>
                        <Usignup2 />
                      </LoginRoute>
                    }
                  />
                  <Route
                    path="/usignup3"
                    element={
                      <LoginRoute>
                        <Usignup3 />
                      </LoginRoute>
                    }
                  />
                  <Route
                    path="/usignup4"
                    element={
                      <LoginRoute>
                        <Usignup4 />
                      </LoginRoute>
                    }
                  />
                  <Route path="*" element={<Navigate to={"/"} />} />
                </Routes>
              </main>
            </BrowserRouter>
          </SolanaProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;

/**
 * User:
 *  Name, DOB, Gender, Contact No
 *  Blood Group, Height, Weight
 *  Pre-Existing Conditions, Allergies (Arrays),
 *  Family Info (Member Wallet ID)
 *  - Insurance Details
 *    Name of provider, Policy No, Coverage amt, Duration, Benifits
 */
