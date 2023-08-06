import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { patient } = useAuth();
  if (!patient) {
    // patient is not authenticated, redirects to patient sign in form
    return <Navigate to="/patientsignin" />;
  }
  return children;
};
