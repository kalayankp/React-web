// src/PrivateRoute.js
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const currentUser = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
