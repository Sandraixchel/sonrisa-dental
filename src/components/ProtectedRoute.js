import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const ProtectedRoute = ({ children }) => {
  //   const { patient } = useAuth();
  console.log("Patient", useAuth());
  const [patient, setPatient] = useLocalStorage("patient", null);
  if (!patient) {
    // patient is not authenticated, redirects to patient sign in form
    return <Navigate to="/patientsignin" />;
  }
  return children;
};
