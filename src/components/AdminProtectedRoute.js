import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AdminProtectedRoute = ({ children }) => {
  const [admin, setAdmin] = useLocalStorage("admin", null);
  if (!admin) {
    // admin is not authenticated, redirects to admin sign in form
    return <Navigate to="/adminsignin" />;
  }
  return children;
};
