import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const PrivateRoutes = () => {
  const { user } = useAuth();
  //   const user = false;

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
