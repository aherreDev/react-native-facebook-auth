import { User } from "firebase/auth";
import { createContext } from "react";
import useAuth from "../hooks/use_auth";

interface AppProviderDefaultValues {
  currentUser: User | null;
  error: string | null;
  signup: () => Promise<any>;
  logout: () => Promise<any>;
}

const defaultValues: AppProviderDefaultValues = {
  currentUser: null,
  error: null,
  signup: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};

export const AppContext = createContext(defaultValues);

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const { currentUser, error, signup, logout } = useAuth();

  return (
    <AppContext.Provider value={{ currentUser, error, signup, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
