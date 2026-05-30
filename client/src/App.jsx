import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import { getCurrentUser } from "./Services/api";
import { useDispatch, useSelector } from "react-redux";
import Notes from "./Pages/Notes";
import Pricing from "./Pages/Pricing";
import History from "./Pages/History";
import PaymentSuccess from "./Pages/PaymentSuccess";
import PaymentFailure from "./Pages/PaymentFailure";
export const serverUrl = "https://notes-generatorserver-87wq.onrender.com";

const App = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);

  const { userData } = useSelector((state) => state.user);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={userData ? <Home /> : <Navigate to="/auth" replace />}
        />
        <Route
          path="/auth"
          element={userData ? <Navigate to="/" replace /> : <Auth />}
        />
        <Route
          path="/history"
          element={userData ? <History/> : <Navigate to="/history" replace />}
        />
        <Route
          path="/note"
          element={userData ? <Notes/>  : <Navigate to="/note" replace />}
        />
        <Route
          path="/pricing"
          element={userData ? <Pricing/> : <Navigate to="/pricing" replace />}
        />
        <Route
          path="/payment-success"
          element={<PaymentSuccess/>}
        />
        <Route
          path="/payment-failed"
          element={<PaymentFailure/>}
        />
      


      </Routes>
    </>
  );
};

export default App;
