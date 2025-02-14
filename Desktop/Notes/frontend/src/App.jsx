import React from "react";
import Navbar from "./components/Navbar";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import CreateNote from "./pages/createNote";
import UpdateNote from "./pages/updateNote";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import { useAuth } from "./context/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { user } = useAuth();
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/create" element={<CreateNote />} />
          <Route path="/notes/update/:id" element={<UpdateNote />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </>
  );
};

export default App;
