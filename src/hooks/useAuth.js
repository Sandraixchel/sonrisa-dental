import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [patient, setPatient] = useLocalStorage("patient", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setPatient(data);
    navigate(`/patientprofile/${data.id}`);
  };

  // call this function to sign out logged in user
  const logout = () => {
    setPatient(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      patient,
      login,
      logout,
    }),
    [patient]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
